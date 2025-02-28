import { Skeleton } from "./ui/skeleton";

export default function ProductsListLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <Skeleton key={index} className="h-96 w-full" />
      ))}
    </div>
  );
}
