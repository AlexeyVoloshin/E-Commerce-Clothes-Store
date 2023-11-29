import { ProductOverview } from "@/components/ProductOverview";
import { ProductsList } from "@/components/ProductsList";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string | number) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  return response.json();
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const product = await getData(id);

  return {
    title: product?.title,
  };
}

export default async function Product({ params: { id } }: Props) {
  const product = await getData(id);
  console.log("product: ", product);

  return <ProductOverview product={product} />;
}
