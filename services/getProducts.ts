async function getAllProducts() {
  const response = await fetch('https://fakestoreapi.com/products?limit=10');
  if (!response.ok) throw new Error('Unable to fetch list product.');

  return response.json();
}

async function getProduct(id: string | number) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!response.ok) throw new Error('Unable to fetch product.');

  return response.json();
}

export { getProduct, getAllProducts };
