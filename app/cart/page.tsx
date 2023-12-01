import { Button } from '@/components/Button';
import { ShoppingCartList } from '@/components/ShoppingCartList';
import { Title } from '@/components/Title';
import { ROUTES } from '@/core/routes';
import { getSingleCart } from '@/services/getCart';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cart | Shopping list',
};

export default async function Cart() {
  const user = {
    userId: 1,
    userCartId: 5,
  };
  const cart = await getSingleCart(user.userCartId);

  return (
    <div>
      <Title>Cart</Title>
      {!cart ? (
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
        <ShoppingCartList cart={cart} />
      )}
    </div>
  );
}
