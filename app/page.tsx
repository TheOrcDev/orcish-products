import { loadSearchParams } from "./search-params";
import type { SearchParams } from "nuqs/server";

import ProductsFilter from "@/components/products-filter";
import { revalidateTag } from "next/cache";
import ProductsPagination from "@/components/products-pagination";
import ProductsList from "@/components/products-list";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Home({ searchParams }: PageProps) {
  const { search, perPage, offset } = await loadSearchParams(searchParams);

  async function refetchProducts() {
    "use server";
    revalidateTag("products");
  }

  return (
    <main className="flex flex-col gap-10 justify-center max-w-6xl mx-auto p-10">
      <h1>Awesome Products</h1>

      <ProductsFilter refetchProducts={refetchProducts} />

      <ProductsList search={search} perPage={perPage} offset={offset} />

      <ProductsPagination refetchProducts={refetchProducts} />
    </main>
  );
}
