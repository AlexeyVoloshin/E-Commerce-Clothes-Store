import { updateProductToCart } from '@/services/serverActions';
import { SingleCartResponseType } from '@/types/response';
import { makeObservable, observable, action, computed } from 'mobx';
import { runInAction, toJS } from 'mobx';

import { enableStaticRendering } from 'mobx-react-lite';

enableStaticRendering(typeof window === 'undefined');

export type CounterHydration = {
  start: number;
};

export class Store {
  cart: SingleCartResponseType | null = null;
  loading: boolean = false;
  error: Error = Error('');
  countProducts: number = 0;
  productsPrice: { id: number; price: number }[] = [];
  constructor() {
    makeObservable(this, {
      cart: observable,
      loading: observable,
      countProducts: observable,
      getCountProductInCart: computed,
      getSubtotal: computed,
      addCart: action,
      updateProductCart: action,
    });
  }
  get getCountProductInCart() {
    return this.countProducts;
  }
  get getSubtotal() {
    const subtotal = this.cart?.products.reduce((prev, curr) => {
      const prod = this.productsPrice.find(product => {
        if (product.id == curr.productId) return product;
      });

      if (prod) {
        return (prev += curr.quantity * prod.price);
      }
      return prev;
    }, 0);

    return subtotal?.toFixed(2) ?? 0;
  }
  setPriceForProduct(price: number, productId: number) {
    const product = this.productsPrice.find(
      product => product.id === productId
    );
    if (!product) {
      this.productsPrice.push({
        id: productId,
        price,
      });
    }
  }

  addCart(cart: SingleCartResponseType) {
    if (!this.cart) {
      this.cart = cart;
    } else if (this.cart.id === cart.id) {
      this.cart.products = [...this.cart.products, ...cart.products];
    }
    this.countProducts = this.cart.products.length;
  }
  async updateProductCart(productId: number | string, quantity: number) {
    const product = this.cart?.products.find(
      item => item.productId === productId
    );
    if (product) {
      product.quantity = quantity;
    }
    if (this.cart) {
      const {
        props: { data },
      } = await updateProductToCart({
        id: this.cart.id,
        products: this.cart.products,
      });
      runInAction(() => {
        this.cart = data;
      });
    }
  }
  deleteProductCart(cart: SingleCartResponseType) {
    if (cart && this.cart && this.cart.id === cart.id) {
      this.cart.products = cart.products;
    }
  }
}

const cartStore = new Store();

export default cartStore;
