'use client';

import { observer } from 'mobx-react-lite';
import store from '@/store/CartStore';

const SubtotalProductsCart = observer(() => {
  return (
    <div className="flex justify-between text-base font-medium text-gray-900">
      <p>Subtotal</p>
      <p>${store.subtotal}</p>
    </div>
  );
});

export { SubtotalProductsCart };
