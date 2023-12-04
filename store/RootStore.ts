// import { CounterHydration, CounterStore } from "./CounterStore";
// import { Store as CartStore, CounterHydration } from './BusinessStore';

// export type RootStoreHydration = {
//   stopwatchStore?: CounterHydration;
// };
// export class RootStore {
//   cartStore: CartStore;
//   //   sizeSwitcherStore: ReturnType<typeof sizeSwitcherStoreFactory>;

//   constructor() {
//     this.cartStore = new CartStore(this);
//     // this.sizeSwitcherStore = sizeSwitcherStoreFactory(this);
//   }

//   hydrate(data: RootStoreHydration) {
//     if (data.stopwatchStore) {
//       this.cartStore.hydrate(data.stopwatchStore);
//     }
//   }
// }
export {};
