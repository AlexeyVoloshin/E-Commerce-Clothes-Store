import React from 'react';

import ContinueShoppingForm from './ContinueShoppingForm';
import { ViewCartList } from './ViewCartList';
import RemoveProdCartForm from './RemoveProdCartForm';

const ShoppingCartList: React.FC = () => {
  return (
    <div>
      <ViewCartList component={}>
        <RemoveProdCartForm />
      </ViewCartList>
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>$262.00</p>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <ContinueShoppingForm />
        </div>
      </div>
    </div>
  );
};
export { ShoppingCartList };
