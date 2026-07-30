const BASE_URL = "https://dummyjson.com";

export async function getProducts() {
  const response = await fetch(`${BASE_URL}/products?limit=8`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data.products;
}