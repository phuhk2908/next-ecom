import HomeCarousel from "@/components/home/home-carousel";
import ProductDetailGallery from "@/components/ProductDetail/ProductDetailGallery";
import ProductDetailInformation from "@/components/ProductDetail/ProductDetailInformation";
import ProductDetailTabs from "@/components/ProductDetail/ProductDetailTabs";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Newsletter from "@/components/shared/Newsletter";
import { memo } from "react";

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

        <div className="mt-9 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <ProductDetailGallery />
          <ProductDetailInformation />
        </div>

        <ProductDetailTabs />

        <HomeCarousel
          title="You might also like"
          isContainer={false}
          isViewAll={false}
        />

        <Newsletter isContainer={false} />
      </main>
    );
  },
);

ProductDetailPage.displayName = "ProductDetailPage";

export default ProductDetailPage;
