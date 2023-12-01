import React from 'react';
import CardProduct from './CardProduct';
import ContinueShoppingForm from './ContinueShoppingForm';
import { SingleCartResponseType } from '@/types/response';

type ShoppingCartListProps = {
  cart: SingleCartResponseType;
};

const ShoppingCartList: React.FC<ShoppingCartListProps> = ({ cart }) => {
  return (
    <div>
      <ul
        role="list"
        className="-my-6 divide-y divide-gray-200">
        {cart.products.map(product => (
          <React.Fragment key={product.productId}>
            <CardProduct
              productId={product.productId}
              quantity={product.quantity}
            />
          </React.Fragment>
        ))}
      </ul>
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
