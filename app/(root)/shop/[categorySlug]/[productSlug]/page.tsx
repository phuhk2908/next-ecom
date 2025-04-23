import HomeCarousel from "@/components/home/home-carousel";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Newsletter from "@/components/shared/Newsletter";
import { product } from "@/constants";
import { memo } from "react";
import ProductDetailTabs from "./_components/product-detail-tabs";
import ProductDetail from "./_components/product-detail";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Men", href: "/men" },
  { label: "T-Shirts", href: "/t-shirts" },
  { label: "One Life Graphic T-Shirt" },
];

interface ProductDetailPageProps {
  params: {
    categorySlug: string;
    productSlug: string;
  };
}

const ProductDetailPage = memo(
  ({ params: { categorySlug, productSlug } }: ProductDetailPageProps) => {
    console.log(categorySlug, productSlug);
    return (
      <main className="container">
        <Breadcrumbs breadcrumbs={breadcrumbs} className="mt-6" />

        <ProductDetail product={product} />

        <ProductDetailTabs />

        <HomeCarousel
          title="You might also like"
          isContainer={false}
          isViewAll={false}
        />

        <Newsletter />
      </main>
    );
  },
);

ProductDetailPage.displayName = "ProductDetailPage";

export default ProductDetailPage;
