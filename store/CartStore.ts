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

import { enableStaticRendering } from 'mobx-react-lite';

enableStaticRendering(typeof window === 'undefined');

export type CounterHydration = {
  start: number;
};

export class Store {
  // root: RootStore;
  cart: SingleCartResponseType | null = null;
  countProducts: number = 0;
  subtotal: number = 0;
  constructor() {
    makeObservable(this, {
      cart: observable,
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
    this.cart = cart;
    this.countProducts = cart.products.length;
  }
  updateProductCart(productId: number) {
    const products = this.cart?.products.filter(
      item => productId !== item.productId
    );
    if (this.cart && products) this.cart.products = products;
  }

  // *fetchCart() {
  //   const response = await fetch('');
  //   this.cart = yield response.json()
  // }

  // hydrate(data?: CounterHydration) {
  //   if (data) {
  //     // this.cart = data.start;
  //   }
  // }
}

const cartStore = new Store();

export default cartStore;
