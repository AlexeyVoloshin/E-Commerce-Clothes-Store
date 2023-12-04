import { ROUTES } from '@/core/routes';
import { ProductResponseType } from '@/types/response';
import Link from 'next/link';
import { TheImage } from './TheImage';
import RemoveProdCartForm from './RemoveProdCartForm';
import React, {
  ComponentType,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';

type RemoveProdCartFormType = ComponentType<{
  productId: number | string;
  cartId: number;
}>;

interface CardProductProps extends PropsWithChildren {
  productId: number | string;
  quantity: number;
  cartId: number;
  component: RemoveProdCartFormType;
}

export default function CardProduct({
  productId,
  quantity,
  cartId,
  component: Component,
  children,
}: CardProductProps) {
  const [product, setProduct] = useState<ProductResponseType>();
  const handlerFetch = useCallback(async (id: string | number) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    const data = await response.json();
    setProduct(data);
  }, []);

  useEffect(() => {
    handlerFetch(productId);
  }, []);

  return (
    <>
      {!product ? (
        <>Error</>
      ) : (
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
                {/* {React.createElement(Component, {
                  productId,
                  cartId,
                })} */}
              </div>
            </div>
          </div>
        </li>
      )}
    </>
  );
}
// <RemoveProdCartForm
//   productId={product.productId}
//   cartId={data.id}
// />