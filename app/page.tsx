import { ProductsList } from '@/components/ProductsList';
import { getAllProducts } from '@/services/getProducts';

export default async function Home() {
  const products = await getAllProducts();
  return <ProductsList products={products} />;
}
