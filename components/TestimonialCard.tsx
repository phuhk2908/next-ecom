import { forwardRef } from "react";
import { Ratings } from "./shared/Ratings";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

const TestimonialCard = forwardRef<HTMLElement, TestimonialCardProps>(
  ({ name, text, rating }, ref) => {
    return (
      <article ref={ref} className="rounded-lg border px-8 py-7">
        <Ratings size={16} rating={rating} variant="yellow" totalStars={5} />
        <div className="mt-4 flex flex-col gap-3">
          <span className="text-lg font-semibold">{name}</span>
          <p className="line-clamp-5 text-sm text-gray-500">{text}</p>
        </div>
      </article>
    );
  },
);

TestimonialCard.displayName = "TestimonialCard";

export default TestimonialCard;
