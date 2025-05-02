import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ProductInfoProps {
  name: string;
  category: {
    name: string;
    slug: string;
  };
  sku: string;
  price: string;
}

export default function ProductInfo({
  name,
  category,
  sku,
  price,
}: ProductInfoProps) {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */} 
      {/* <div className="flex items-center text-sm text-muted-foreground">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/category/${category.slug}`} className="hover:underline">
          {category.name}
        </Link>
      </div> */}

      {/* Product Title and Price */}
      <div>
        <h1 className="text-3xl font-bold lg:text-4xl">{name}</h1>
        <div className="mt-2 flex items-center">
          <Badge variant="outline" className="mr-2">
            {category.name}
          </Badge>
          <span className="text-muted-foreground">SKU: {sku}</span>
        </div>
        <div className="mt-4 text-3xl font-bold">${price}</div>
      </div>

      <Separator />
    </div>
  );
}
