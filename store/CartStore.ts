import { updateProductToCart } from '@/services/serverActions';
import { SingleCartResponseType } from '@/types/response';
import {
  makeObservable,
  observable,
  autorun,
  reaction,
  when,
  action,
  computed,
} from 'mobx';
// import { RootStore } from './RootStore';
import { makeAutoObservable, runInAction } from 'mobx';

import { enableStaticRendering } from 'mobx-react-lite';

enableStaticRendering(typeof window === 'undefined');

export type CounterHydration = {
  start: number;
};

export class Store {
  // root: RootStore;
  cart: SingleCartResponseType | null = null;
  loading: boolean = false;
  error: Error = Error('');
  countProducts: number = 0;
  subtotal: number = 0;
  constructor() {
    makeObservable(this, {
      cart: observable,
      loading: observable,
      subtotal: observable,
      countProducts: observable,
      getCountProductInCart: computed,
      addCart: action,
      updateProductCart: action,
    });
  }
  get getCountProductInCart() {
    return this.countProducts;
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
