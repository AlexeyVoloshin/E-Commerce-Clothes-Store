'use client';

import { observer } from 'mobx-react-lite';
import cartStore from '@/store/CartStore';
import ContinueShoppingForm from './ContinueShoppingForm';

const SubtotalProductsCart = observer(() => {
  return (
    <>
      {cartStore.cart?.products.length && (
        <>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${cartStore.loading ? <span>Loading...</span> :cartStore.getSubtotal}</p>
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
