'use server';

import { ROUTES } from '@/core/routes';
import { user } from '@/data/users';
import { ProductCartType } from '@/types/propsType';
import { revalidatePath } from 'next/cache';
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

  revalidatePath(ROUTES.static.cart);
  // redirect(ROUTES.static.cart);

  return {
    props: { data },
  };
}

async function paymentProduct() {
  console.log('Payment is success');
}

async function updateProductToCart({
  id,
  products,
  userId,
}: {
  id: number;
  userId?: number;
  date?: string;
  products?: ProductCartType[];
}) {
  const date = new Date().toISOString().split('T')[0];

  const response = await fetch(`https://fakestoreapi.com/carts/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      date,
      products,
    }),
  });
  revalidatePath(ROUTES.static.cart);

  const data = await response.json();

  return {
    props: { data },
  };
}

export { paymentProduct, updateProductToCart, addProductsToCart };
