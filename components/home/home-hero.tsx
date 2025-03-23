import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const HomeHero = () => {
  return (
    <div className="bg-[#F2F0F1] w-full pt-10 lg:pt-[103px] lg:pb-[116px]">
      <div className="relative container flex flex-col lg:flex-row w-full overflow-hidden">
        <div className="w-full lg:w-[596px] text-pretty">
          <div className="flex flex-col gap-y-8">
            <h1 className="font-integral font-bold text-[36px] lg:text-[64px] leading-[34px] lg:leading-[64px]">
              Find clothes that matches your style
            </h1>
            <p className="text-black/60 leading-[22px]">
              Browse through our diverse range of meticulously cragted garments,
              designed to bring out your individuality and cater to your sense
              of style
            </p>
            <Button size="lg" className="w-full md:w-fit">
              Shop Now
            </Button>
          </div>

          <div className="mt-6 lg:mt-12 flex max-md:flex-wrap max-md:justify-center items-center gap-8 w-full lg:w-fit">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[40px] font-bold">200+</span>
                <span className="text-black/60">International Brands</span>
              </div>
            </div>

            <Separator
              orientation="vertical"
              className="bg-black/10 h-[74px] hidden lg:block"
            />

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[40px] font-bold">2,000+</span>
                <span className="text-black/60">High-Quality Products</span>
              </div>
            </div>

            <Separator
              orientation="vertical"
              className="bg-black/10 h-[74px] hidden lg:block"
            />

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[40px] font-bold">30,000+</span>
                <span className="text-black/60">Happy Customers</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative lg:absolute lg:right-0 lg:top-0 h-full lg:w-[calc(100%-596px)]">
          <div className="relative aspect-[1/1]">
            <Image
              src="/static/images/home-hero-4.png"
              alt="Home Hero"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
