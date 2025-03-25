import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TestimonialCard from "../TestimonialCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { fakeTestimonials, faqData } from "@/constants";

const ProductDetailTabs = () => {
  const midpoint = Math.ceil(faqData.length / 2);
  const leftColumnData = faqData.slice(0, midpoint);
  const rightColumnData = faqData.slice(midpoint);

  return (
    <div className="w-full py-20">
      <Tabs defaultValue="ratings" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">Product Details</TabsTrigger>
          <TabsTrigger value="ratings">Ratings</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <div className="flex items-center justify-center">Nothing here</div>
        </TabsContent>
        <TabsContent value="ratings">
          <div className="my-8 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <h3 className="text-2xl font-semibold">All Reviews</h3>
              <span className="text-xs text-black/60">(451)</span>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
            {fakeTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="faq">
          <div className="mt-8 grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column */}
            <div className="space-y-8">
              {leftColumnData.map((category, categoryIndex) => (
                <div key={`left-${categoryIndex}`} className="space-y-4">
                  <h3 className="text-2xl font-semibold">
                    {category.category}
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem
                        key={`left-${categoryIndex}-${itemIndex}`}
                        value={`left-item-${categoryIndex}-${itemIndex}`}
                      >
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {rightColumnData.map((category, categoryIndex) => (
                <div key={`right-${categoryIndex}`} className="space-y-4">
                  <h3 className="text-2xl font-semibold">
                    {category.category}
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem
                        key={`right-${categoryIndex}-${itemIndex}`}
                        value={`right-item-${categoryIndex}-${itemIndex}`}
                      >
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDetailTabs;
