type Props = {
  cartId: number;
  productId: number;
  quantity: number;
  userId: number;
};

async function updateProduct({ cartId, userId, productId, quantity }: Props) {
  fetch(`https://fakestoreapi.com/carts/${cartId}`, {
    method: 'PATCH',
    body: JSON.stringify({
      userId,
      date: 2019 - 12 - 10,
      products: [{ productId, quantity }],
    }),
  })
    .then(res => res.json())
    .then(json => console.log(json));
}

export default async function QuantityForm({
  cartId,
  productId,
  quantity,
  userId,
}: {
  cartId: number;
  productId: number;
  quantity: number;
  userId: number;
}) {
  const params = { userId, productId, cartId, quantity };
  return (
    <form action={updateProduct.bind(null, params)}>
      <select
        id={`quantity-${productId}`}
        name={`quantity-${productId}`}
        className="bg-gray-300/50 p-2.5 rounded "
        defaultValue={quantity}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
          <option
            key={item}
            value={item}>
            {item}
          </option>
        ))}
      </select>
    </form>
  );
}
