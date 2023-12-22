import { ProductOverview } from '@/components/ProductOverview';
import { getProduct } from '@/services/productsApi';
import { Metadata } from 'next';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product?.title,
  };
}

export default async function Product({ params: { id } }: Props) {
  const product = await getProduct(id);

  return <ProductOverview product={product} />;
}
