'use client';

import { ROUTES } from '@/core/routes';
import Link from 'next/link';
import { IconCart } from './Icons/IconCart';
import { observer } from 'mobx-react-lite';
// import { useCounterStore } from '@/providers/RootStoreProvider';
import store from '@/store/CartStore';
import { user } from '@/data/users';
import { getSingleCart } from '@/services/getCart';

const ButtonCart = observer(() => {
  // const cart = await getSingleCart(user.cartId);
  const { cart } = store;
  return (
    <div className="relative h-6 w-6">
      <Link
        href={ROUTES.static.cart}
        className=" h-6 w-6">
        <IconCart className="h-6 w-6 text-white absolute" />
        <div className="flex justify-center items-center absolute rounded-[50%] bg-yellow-100 h-[15px] w-[15px] z-10 -left-1 bottom-0">
          <span className=" text-xs">{cart?.products.length ?? 0}</span>
        </div>
      </Link>
    </div>
  );
});

export { ButtonCart };
