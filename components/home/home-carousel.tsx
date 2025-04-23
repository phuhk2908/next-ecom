import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCard from "../product-card";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface HomeCarouselProps {
  title: string;
  isContainer?: boolean;
  isViewAll?: boolean;
}

const HomeCarousel = ({
  title,
  isContainer = true,
  isViewAll = true,
}: HomeCarouselProps) => {
  return (
    <section className="py-20">
      <div className={cn(isContainer && "container")}>
        <h2 className="mb-10 text-center text-2xl font-black uppercase tracking-tight lg:text-4xl">
          {title}
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {Array.from({ length: 12 }).map((_, idx) => (
              <CarouselItem
                key={idx}
                className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <ProductCard />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {isViewAll && (
          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="rounded-full px-8">
              View All
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeCarousel;
