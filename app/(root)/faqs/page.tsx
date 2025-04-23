import type { Metadata } from "next";
import { FaqContent } from "./_components/faq-content";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Find answers to commonly asked questions about our platform",
};

export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold">Frequently Asked Questions</h1>
        <p className="mb-8 text-muted-foreground">
          Find answers to the most common questions about our platform and
          services.
        </p>
        <FaqContent />
      </div>
    </div>
  );
}
