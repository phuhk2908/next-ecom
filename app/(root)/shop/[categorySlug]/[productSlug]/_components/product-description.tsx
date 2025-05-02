import { Card } from "@/components/ui/card";

interface ProductDescriptionProps {
  description: string;
}

export function ProductDescription({ description }: ProductDescriptionProps) {
  return (
    <Card className="p-4">
      <h3 className="mb-2 font-medium">Description</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  );
}
