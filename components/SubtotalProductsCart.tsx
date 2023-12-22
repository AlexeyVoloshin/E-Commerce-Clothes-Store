'use client';

import { observer } from 'mobx-react-lite';
import store from '@/store/CartStore';
import ContinueShoppingForm from './ContinueShoppingForm';
import { useMemo } from 'react';

const SubtotalProductsCart = observer(() => {
  const subtotal = useMemo(() => store.getSubtotal, []);

  return (
    <>
      {store.cart?.products.length && (
        <>
          {' '}
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <ContinueShoppingForm />
          </div>
        </>
      )}
    </>
  );
});

export { SubtotalProductsCart };
