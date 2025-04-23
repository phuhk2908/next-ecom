import { forwardRef } from "react";
import { Ratings } from "./shared/Ratings";
import { CircleCheckBig } from "lucide-react";

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
          <div className="flex items-center gap-1">
            <span className="text-lg font-semibold">{name}</span>
            <CircleCheckBig className="size-4 text-green-500" />
          </div>

          <p className="line-clamp-5 text-sm text-black/60">{text}</p>
        </div>

        <span className="mt-6 block font-medium text-black/60">
          Posted on August 19, 2023
        </span>
      </article>
    );
  },
);

TestimonialCard.displayName = "TestimonialCard";

export default TestimonialCard;
