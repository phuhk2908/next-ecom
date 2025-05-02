import { product } from "@/constants";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import ProductDetail from "@/app/(root)/shop/[categorySlug]/[productSlug]/_components/product-detail";
import { notFound } from "next/navigation";
import ProductDetailTabs from "./_components/product-detail-tabs";

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

const ProductDetailPage = async ({
  params: { categorySlug, productSlug },
}: ProductDetailPageProps) => {
  console.log(categorySlug, productSlug)
  
  if (!product) {
    notFound();
  }

  return (
    <main className="container">
      <Breadcrumbs breadcrumbs={breadcrumbs} className="my-4" />

      <ProductDetail product={product} />

      <ProductDetailTabs />
    </main>
  );
};

export default ProductDetailPage;
