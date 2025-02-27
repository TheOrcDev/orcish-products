import { getProducts } from "@/server/products";
import ProductCard from "./product-card";

export default async function ProductsList({
  search,
  perPage,
  offset,
}: {
  search: string;
  perPage: number;
  offset: number;
}) {
  const transformedOffset = (offset - 1) * perPage;
  const products = await getProducts({
    search,
    perPage,
    offset: transformedOffset,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
