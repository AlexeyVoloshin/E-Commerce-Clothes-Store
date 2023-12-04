'use server';

import { ROUTES } from '@/core/routes';
import { user } from '@/data/users';
import { ProductCartType } from '@/types/propsType';
import { revalidatePath } from 'next/cache';
import { runInAction } from 'mobx';
import cartStore from '@/store/CartStore';
import { SingleCartResponseType } from '@/types/response';

async function addProductsToCart({ productId, quantity }: ProductCartType) {
  const date = new Date().toISOString().split('T')[0];

  const response = await fetch('https://fakestoreapi.com/carts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: user.id,
      date,
      products: [
        {
          productId,
          quantity,
        },
      ],
    }),
  });

  const data: SingleCartResponseType = await response.json();

  // runInAction(() => {
  //   cartStore.addCart(data);
  // });
  revalidatePath(ROUTES.static.cart);
  // redirect(ROUTES.static.cart);

  return {
    props: { data: data },
  };
}

async function paymentProduct() {
  console.log('Payment is success');
}

async function updateProductToCart({
  userId,
  cartId,
  productId,
}: {
  cartId: number;
  userId: number;
  productId: number | string;
  quantity?: number;
}) {
  const date = new Date().toISOString().split('T')[0];

  fetch(`https://fakestoreapi.com/carts/${cartId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      date,
      products: [],
    }),
  });
  revalidatePath(ROUTES.static.cart);
}

export { paymentProduct, updateProductToCart, addProductsToCart };
