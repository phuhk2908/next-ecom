import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ProductFilter from "@/components/product-filter";
import ProductList from "@/components/product-list";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatSlug } from "@/lib/utils";

import ProductFilterMobile from "@/components/product-filter-mobile";
import Newsletter from "@/components/shared/Newsletter";

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Men" }];

interface CategoryPageProps {
  params: {
    categorySlug: string;
  };
}

const CategoryPage = ({ params: { categorySlug } }: CategoryPageProps) => {
  return (
    <div className="container">
      <Breadcrumbs breadcrumbs={breadcrumbs} className="mt-6" />

      <div className="gap-5 py-10 lg:flex lg:items-start">
        <div className="max-lg:hidden lg:w-[295px]">
          <ProductFilter />
        </div>

        <div className="w-full flex-1">
          {/* Sort */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-[28px] font-bold lg:text-[32px]">
                {formatSlug(categorySlug)}
              </h3>

              <span className="block text-[14px] text-black/60 lg:hidden">
                Showing 1-10 of 100 Products
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden text-base text-black/60 lg:block">
                Showing 1-10 of 100 Products
              </span>

              <ProductFilterMobile />

              <Select>
                <SelectTrigger className="hidden w-fit gap-2 font-medium lg:inline-flex">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <ProductList />
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default CategoryPage;
