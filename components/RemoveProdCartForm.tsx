import { updateProductToCart } from '@/services/serverActions';
import { runInAction } from 'mobx';
import cartStore from '@/store/CartStore';

export default function RemoveProdCartForm({
  productId,
}: {
  productId: number | string;
}) {
  const updateProductCartById = async () => {
    if (cartStore.cart) {
      const filteredProducts = cartStore.cart.products.filter(
        item => item.productId !== productId
      );
      const productCart = await updateProductToCart({
        ...cartStore.cart,
        products: filteredProducts,
      });

      console.log('productCart: ', productCart);

      runInAction(() => {
        cartStore.deleteProductCart(productCart.props.data);
      });
    }
  };

  return (
    <form action={updateProductCartById}>
      <button
        type="submit"
        className="font-medium text-indigo-600 hover:text-indigo-500">
        Remove
      </button>
    </form>
  );
}
