import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";

const HomeBrowse = () => {
  return (
    <section className="">
      <div className="container rounded-2xl bg-[#f0f0f0] px-8 py-10 md:px-11 lg:px-16 lg:py-20">
        <h2 className="text-pretty text-center font-integral text-2xl font-bold uppercase lg:text-4xl">
          Browse by dress style
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 md:mt-11 md:grid-cols-3 lg:mt-[64px]">
          <div className="relative col-span-full rounded-xl bg-white px-5 py-3 md:col-span-1 md:px-6 md:py-4 lg:px-9 lg:py-6">
            <AspectRatio ratio={11 / 4}>
              <h3 className="text-lg font-bold lg:text-3xl">Casual</h3>
            </AspectRatio>
          </div>

          <div className="relative col-span-full rounded-xl bg-white px-5 py-3 md:col-span-2 md:px-6 md:py-4 lg:px-9 lg:py-6">
            <AspectRatio ratio={11 / 4}>
              <h3 className="text-lg font-bold lg:text-3xl">Formal</h3>
            </AspectRatio>
          </div>

          <div className="relative col-span-full rounded-xl bg-white px-5 py-3 md:col-span-2 md:px-6 md:py-4 lg:px-9 lg:py-6">
            <AspectRatio ratio={11 / 4}>
              <h3 className="text-lg font-bold lg:text-3xl">Party</h3>
            </AspectRatio>
          </div>

          <div className="relative col-span-full rounded-xl bg-white px-5 py-3 md:col-span-1 md:px-6 md:py-4 lg:px-9 lg:py-6">
            <AspectRatio ratio={11 / 4}>
              <h3 className="text-lg font-bold lg:text-3xl">Gym</h3>
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBrowse;
