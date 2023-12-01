import { ROUTES } from '@/core/routes';
import { ProductResponseType } from '@/types/response';
import Link from 'next/link';

async function getProduct(id: string | number): Promise<ProductResponseType> {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  return response.json();
}

export default async function CardProduct({
  productId,
  quantity,
}: {
  productId: number | string;
  quantity: number;
}) {
  const product = await getProduct(productId);

  return (
    <li
      key={product.id}
      className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover object-center"
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
          {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          {/* <p className="text-gray-500">Qty {quantity}</p> */}
          <div className="">
            <label
              htmlFor={`quantity-${product.id}`}
              className="mr-3">
              Quantity, Basic Tee
            </label>
          </div>
          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500">
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
