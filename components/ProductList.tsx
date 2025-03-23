import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ProductCard from "./ProductCard";
import { Separator } from "./ui/separator";

const ProductList = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-3">
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>

      <Separator className="mb-5 mt-9" />

      <Pagination className="mx-0 w-full justify-normal">
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>

          <div className="flex">
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </div>

          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default ProductList;
