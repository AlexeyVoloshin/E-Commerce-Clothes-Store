import { ROUTES } from '@/core/routes';
import { revalidatePath } from 'next/cache';

async function getAllProductsApi() {
  const response = await fetch('https://fakestoreapi.com/products?limit=10');
  if (!response.ok) throw new Error('Unable to fetch list product.');

  return response.json();
}

async function getProductApi(id: string | number) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!response.ok) throw new Error('Unable to fetch product.');

  return response.json();
}

async function updateProductToCartApi({
  userId,
  cartId,
  products,
}: {
  cartId: number;
  userId?: number;
  products?: [];
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
      products,
    }),
  });
  revalidatePath(ROUTES.static.cart);
}

export {
  getProductApi as getProduct,
  getAllProductsApi as getAllProducts,
  updateProductToCartApi,
};
