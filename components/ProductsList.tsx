import React from 'react';
import { Title } from './Title';
import Image from 'next/image';
import { ROUTES } from '@/core/routes';
import { client_utils } from '@/utils';
import { TheImage } from './TheImage';

type ProductsListType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  href: string;
};

type ProductsListProps = {
  products: ProductsListType[];
};

const ProductsList: React.FC<ProductsListProps> = ({
  products: productsList,
}) => {
  return (
    <>
      <div className="mb-6">
        <Title>Product list</Title>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productsList.map(product => (
            <a
              key={product.id}
              href={ROUTES.dynamic.productDetails(product.id)}
              className="group flex flex-col">
              <div className="flex justify-center  h-full  xl:aspect-h-8 xl:aspect-w-7 rounded-lg w-px/280 max-h-[320px] w-auto">
                <TheImage
                  alt={product.title}
                  src={product.image}
                  className={
                    'w-auto   max-w-full max-h-full object-contain object-center group-hover:opacity-75'
                  }
                  width={280}
                  height={320}
                  sizes="calc(100vw - 58px)"
                  priority
                />
              </div>

              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                ${product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export { ProductsList };
