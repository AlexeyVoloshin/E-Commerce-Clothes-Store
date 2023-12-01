import { ROUTES } from '@/core/routes';
import { ProductResponseType } from '@/types/response';
import Link from 'next/link';
import { TheImage } from './TheImage';
import RemoveProdCartForm from './RemoveProdCartForm';

async function getProduct(id: string | number): Promise<ProductResponseType> {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  return response.json();
}

export default async function CardProduct({
  productId,
  quantity,
  cartId,
}: {
  productId: number | string;
  quantity: number;
  cartId: number;
}) {
  const product = await getProduct(productId);

  return (
    <li
      key={product.id}
      className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 border-b">
        <TheImage
          src={product.image}
          alt={product.title}
          width={94}
          height={94}
          className="h-full w-full object-contain object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link href={ROUTES.dynamic.productDetails(product.id)}>
                {product.title}
              </Link>
            </h3>
            <p className="ml-4">{product.price}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="">
            <label
              htmlFor={`quantity-${product.id}`}
              className="mr-3">
              Quantity {quantity}
            </label>
          </div>
          <div className="flex">
            <RemoveProdCartForm
              productId={product.id}
              cartId={cartId}
            />
          </div>
        </div>
      </div>
    </li>
  );
}
