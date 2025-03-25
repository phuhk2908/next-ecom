import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const HomeHero = () => {
  return (
    <div className="w-full bg-[#F2F0F1] pt-10 lg:pb-[116px] lg:pt-[103px]">
      <div className="container relative flex w-full flex-col overflow-hidden lg:flex-row">
        <div className="w-full text-pretty lg:w-[596px]">
          <div className="flex flex-col gap-y-8">
            <h1 className="font-integral text-[36px] font-bold leading-[34px] lg:text-[64px] lg:leading-[64px]">
              Find clothes that matches your style
            </h1>
            <p className="leading-[22px] text-black/60">
              Browse through our diverse range of meticulously cragted garments,
              designed to bring out your individuality and cater to your sense
              of style
            </p>
            <Button size="lg" className="w-full md:w-fit">
              Shop Now
            </Button>
          </div>

          <div className="mt-6 flex w-full items-center gap-8 max-md:flex-wrap max-md:justify-center lg:mt-12 lg:w-fit">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[40px] font-bold">200+</span>
                <span className="text-black/60">International Brands</span>
              </div>
            </div>

            <Separator
              orientation="vertical"
              className="hidden h-[74px] bg-black/10 lg:block"
            />

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[40px] font-bold">2,000+</span>
                <span className="text-black/60">High-Quality Products</span>
              </div>
            </div>

            <Separator
              orientation="vertical"
              className="hidden h-[74px] bg-black/10 lg:block"
            />

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[40px] font-bold">30,000+</span>
                <span className="text-black/60">Happy Customers</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-full lg:absolute lg:right-0 lg:top-0 lg:w-[calc(100%-596px)]">
          <div className="relative aspect-[1/1]">
            <Image
              src="/static/images/home-hero-4.png"
              alt="Home Hero"
              fill
              sizes="50vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
