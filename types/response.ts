export type ProductResponseType = {
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

export type SingleCartResponseType = {
  id: number;
  userId: number;
  date: string;
  products: ProductType[];
};

type ProductType = {
  productId: number | string;
  quantity: number;
};
