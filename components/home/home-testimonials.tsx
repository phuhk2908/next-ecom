"use client";

import { useEffect, useRef } from "react";
import TestimonialCard from "../testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Emily Rogers",
    text: "Absolutely amazing service! The team was professional, efficient, and exceeded all of my expectations. I will definitely be using them again in the future!",
    rating: 5,
  },
  {
    name: "James Williams",
    text: "I've never had such a smooth experience. From start to finish, everything was handled with care and attention to detail. Highly recommend!",
    rating: 4,
  },
  {
    name: "Sophia Clark",
    text: "A fantastic company to work with! Their customer service is top-notch, and they went above and beyond to ensure I was satisfied with my purchase.",
    rating: 5,
  },
  {
    name: "Michael Harris",
    text: "This was the best decision I've made in a long time. The product quality was superb, and the delivery was fast and reliable. Will be coming back for more!",
    rating: 4,
  },
  {
    name: "Lily Thompson",
    text: "The best experience I've had in a long time! Everyone was so friendly, and they took the time to answer all of my questions. Highly recommend them!",
    rating: 5,
  },
  {
    name: "Daniel Martinez",
    text: "I was thoroughly impressed with how easy everything was. Great communication, quick response times, and I got exactly what I was looking for.",
    rating: 4,
  },
  {
    name: "Ava Davis",
    text: "What a wonderful experience! They made the entire process simple and enjoyable. I'm so happy with my purchase, and I will definitely return!",
    rating: 5,
  },
  {
    name: "Ethan Brown",
    text: "I can't say enough good things about this company. The product was exactly as described, and the customer service was truly exceptional.",
    rating: 5,
  },
  {
    name: "Olivia Moore",
    text: "Wonderful experience from start to finish. The team was knowledgeable, helpful, and quick to respond. I'm a very happy customer!",
    rating: 4,
  },
  {
    name: "Lucas Wilson",
    text: "Top-notch service and product quality! I was very impressed by the level of professionalism and attention to detail. Would definitely recommend to others!",
    rating: 5,
  },
];

const HomeTestimonials = () => {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const adjustCardHeights = () => {
      const cards = cardRefs.current.filter(
        (ref): ref is HTMLElement => ref !== null,
      );
      if (cards.length === 0) return;

      cards.forEach((card) => {
        card.style.height = "auto";
      });

      const maxHeight = Math.max(...cards.map((card) => card.offsetHeight));

      cards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
      });
    };

    adjustCardHeights();
    window.addEventListener("resize", adjustCardHeights);

    return () => {
      window.removeEventListener("resize", adjustCardHeights);
    };
  }, []);

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="font-integral text-4xl font-bold">
          Our happy customers
        </h2>
        <div className="mt-10 w-full">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 500,
              }),
            ]}
          >
            <CarouselContent>
              {testimonials.map((testimonial, idx) => (
                <CarouselItem
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                  key={idx}
                >
                  <TestimonialCard
                    ref={(el) => {
                      cardRefs.current[idx] = el;
                      return;
                    }}
                    name={testimonial.name}
                    text={testimonial.text}
                    rating={testimonial.rating}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
