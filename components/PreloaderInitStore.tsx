'use client';

import { SingleCartResponseType } from '@/types/response';
import { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
// import { useCounterStore } from '@/providers/RootStoreProvider';
import store from '@/store/CartStore';

type PreloaderInitStateProps = {
  cart: SingleCartResponseType;
};

const PreloaderInitStore = observer(({ cart }: PreloaderInitStateProps) => {
  //   const loaded = useRef(false);
  // const store = useCounterStore();

  useEffect(() => {
    if (!store.cart) {
      console.log('init store');

      store.addCart(cart);

      //   loaded.current = true;
    }
  }, [store]);
  return null;
});

export default PreloaderInitStore;
