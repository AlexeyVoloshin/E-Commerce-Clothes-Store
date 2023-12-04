'use client';

import React, { ComponentType, ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import store from '@/store/CartStore';
import CardProduct from './CardProduct';
import { Button } from './Button';
import Link from 'next/link';
import { ROUTES } from '@/core/routes';

type RemoveProdCartFormType = ComponentType<{
  productId: number | string;
  cartId: number;
}>;

interface ViewCartListProps {
  component: RemoveProdCartFormType;
}

const ViewCartList = observer(({ component: Component }: ViewCartListProps) => {
  const { cart: data } = store;
  return (
    <>
      {!data ? (
        <div>
          <p>Your cart is still empty.</p>
          <Button>
            <Link
              href={ROUTES.static.home}
              className="bottom-2 bg">
              back to shopping
            </Link>
          </Button>
        </div>
      ) : (
        <ul
          role="list"
          className=" divide-y divide-gray-200">
          {data?.products.map(product => (
            <React.Fragment key={product.productId}>
              <CardProduct
                cartId={data.id}
                productId={product.productId}
                quantity={product.quantity}
                component={CompoRemoveProdCartFormnent}
              />
            </React.Fragment>
          ))}
        </ul>
      )}
    </>
  );
});

export { ViewCartList };
