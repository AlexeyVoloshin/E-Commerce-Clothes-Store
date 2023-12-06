import ContinueShoppingForm from '@/components/ContinueShoppingForm';
import { SubtotalProductsCart } from '@/components/SubtotalProductsCart';
import { Title } from '@/components/Title';
import { ViewCartList } from '@/components/ViewCartList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cart | Shopping list',
};

export default async function Cart() {
  // const cart = await getSingleCart(user.cartId);

  return (
    <div className="pl-2 pr-2">
      <Title>Cart</Title>
      <div>
        <ViewCartList />
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <SubtotalProductsCart />
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <ContinueShoppingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
