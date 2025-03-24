import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCard from "../ProductCard";
import { Button } from "../ui/button";

interface HomeCarouselProps {
  title: string;
}

const HomeCarousel = ({ title }: HomeCarouselProps) => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="mb-10 text-center text-4xl font-black uppercase tracking-tight">
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

        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="rounded-full px-8">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeCarousel;
