import { ProductCartType } from '@/types/propsType';

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
    cache: 'force-cache'
  });
  if(!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await response.json();

  return {
    props: { data },
  };
}

export {
  getProductApi as getProduct,
  getAllProductsApi as getAllProducts,
  updateProductToCartApi,
};
