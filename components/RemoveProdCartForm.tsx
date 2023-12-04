import { user } from '@/data/users';
import { updateProductToCart } from '@/services/serverActions';

export default async function RemoveProdCartForm({
  productId,
  cartId,
}: {
  productId: number | string;
  cartId: number;
}) {
  const params = {
    userId: user.id,
    cartId,
    productId,
  };
  return (
    <form action={updateProductToCart.bind(null, params)}>
      <button
        type="submit"
        className="font-medium text-indigo-600 hover:text-indigo-500">
        Remove
      </button>
    </form>
  );
}
