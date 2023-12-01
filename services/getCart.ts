import { SingleCartResponseType } from '@/types/response';

async function getSingleCart(cartId: number): Promise<SingleCartResponseType> {
  const response = await fetch(`https://fakestoreapi.com/carts/${cartId}`);

  if (!response.ok) throw new Error('Unable to fetch products.');

  return response.json();
}

export { getSingleCart };
