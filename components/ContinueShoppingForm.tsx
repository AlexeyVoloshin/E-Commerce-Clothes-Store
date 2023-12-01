import { paymentProduct } from '@/services/serverActions';
import { Button } from './Button';

export default async function ContinueShoppingForm() {
  return (
    <form action={paymentProduct}>
      <Button type="submit">Continue to Payment</Button>
    </form>
  );
}
