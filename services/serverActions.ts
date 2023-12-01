'use server';

import { ROUTES } from '@/core/routes';
import { ProductCartType } from '@/types/propsType';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

async function addProductsToCart({ productId, quantity }: ProductCartType) {
  const date = new Date().toISOString().split('T')[0];

  const response = await fetch('https://fakestoreapi.com/carts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: 1,
      date,
      products: [
        {
          productId,
          quantity,
        },
      ],
    }),
  });

  await response.json();

  revalidatePath(ROUTES.static.cart);
  redirect(ROUTES.static.cart);
}

async function paymentProduct() {
  console.log('Payment is success');
}

export { addProductsToCart, paymentProduct };
