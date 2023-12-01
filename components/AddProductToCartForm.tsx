import { Button } from './Button';
import { ProductCartType } from '@/types/propsType';
import { addProductsToCart } from '@/services/serverActions';

export default function AddProductToCartForm(data: ProductCartType) {
  return (
    <form
      className="w-full"
      action={addProductsToCart.bind(null, data)}>
      <Button
        type="submit"
        className="w-full">
        Add to bag
      </Button>
    </form>
  );
}

export { AddProductToCartForm };
