import { ProductsList } from "@/components/ProductsList";

async function getData() {
  const response = await fetch("https://fakestoreapi.com/products?limit=10");

  return response.json();
}

export default async function Home() {
  const products = await getData();
  return <ProductsList products={products} />;
}
