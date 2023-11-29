import { IconStar } from "./Icons/IconStar";
import Image from "next/image";
import { client_utils } from "@/utils";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "./Button";

type ProductOverviewType = {
  id: string | number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
};

type RatingType = {
  rate: number;
  count: number;
};

type ProductOverviewProps = {
  product: ProductOverviewType;
};

const ProductOverview: React.FC<ProductOverviewProps> = ({ product }) => {
  return (
    <div className="pt-6">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li className="text-sm">
            <a
              href={"#"}
              aria-current="page"
              className="font-medium text-gray-500 hover:text-gray-600"
            >
              {product.title}
            </a>
          </li>
        </ol>
      </nav>

      {/* Image gallery */}
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="flex justify-center w-full h-full xl:aspect-h-8 xl:aspect-w-7 rounded-lg ">
          <Image
            className="w-auto h-full  max-w-full max-h-full object-contain object-center group-hover:opacity-75"
            src={product.image}
            placeholder="blur"
            blurDataURL={client_utils.rgbDataURL(204, 229, 255)}
            alt={product.title}
            width={270}
            height={226}
            sizes="calc(100vw - 58px)"
          />
        </div>
      </div>

      {/* Product info */}
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {product.title}
          </h1>
        </div>

        {/* Options */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900">
            {product.price}
          </p>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <IconStar
                    key={rating}
                    className={clsx(
                      product.rating.rate > rating
                        ? "text-yellow-500 "
                        : "text-yellow-200",
                      "h-5 w-5 flex-shrink-0"
                    )}
                  />
                ))}
              </div>
              <p className="sr-only">{product.rating.rate} out of 5 stars</p>
              <Link
                href={"#"}
                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                {product.rating.count} reviews
              </Link>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Category</h3>
            <Link
              href={"#"}
              className="text-sm text-gray-600 hover:text-gray-400"
            >
              {product.category}
            </Link>
          </div>
          <div className="flex justify-center mt-10">
            <Button className="w-full">Add to bag</Button>
          </div>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductOverview };
