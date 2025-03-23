import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="my-4 w-full rounded-lg bg-black px-6 py-7 lg:px-[64px] lg:py-[43px]">
      <div className="flex flex-col items-center justify-between max-lg:gap-8 lg:flex-row">
        <div className="flex-1">
          <h3 className="font-integral text-[32px] font-bold text-white lg:text-[40px]">
            Stay upto date about our latest offer
          </h3>
        </div>

        <div className="flex w-full flex-col items-center gap-4 lg:w-[349px]">
          <div className="relative flex h-10 w-full items-center rounded-md bg-white px-4 py-2 text-black/40">
            <Mail className="size-5" />
            <Input
              className="border-transparent shadow-none focus-visible:ring-0"
              placeholder="Enter your email address"
            />
          </div>
          <Button className="w-full" size="lg">
            Subcribe to newsletter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
