import QuantitySelector from "@/components/QuantitySelector";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Newsletter from "@/components/shared/Newsletter";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tag, Trash2 } from "lucide-react";
import Image from "next/image";
import { Fragment } from "react";

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Cart" }];

const CartPage = () => {
  return (
    <main>
      <div className="container">
        <Breadcrumbs breadcrumbs={breadcrumbs} className="mt-6" />

        <h2 className="my-6 font-integral text-2xl font-bold lg:text-4xl">
          YOUR CART
        </h2>

        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-full lg:col-span-7">
            <div className="rounded-md border p-[14px] lg:px-6 lg:py-5">
              {/* Order Item */}
              {Array.from({ length: 12 }).map((_, index) => {
                const isLastItem = index === 11;
                return (
                  <Fragment key={index}>
                    <div className="flex gap-4">
                      <div className="w-[100px] flex-shrink-0 overflow-hidden rounded lg:w-32">
                        <AspectRatio ratio={1}>
                          <Image
                            src="https://placehold.co/128x128"
                            alt="Product"
                            fill
                            sizes="10vw"
                          />
                        </AspectRatio>
                      </div>

                      {/* Desktop */}
                      <div className="hidden w-full justify-between lg:flex">
                        {/* Product Information */}
                        <div className="flex flex-col justify-between gap-4">
                          <div>
                            <h4 className="whitespace-nowrap text-base font-bold lg:text-xl">
                              Gradient Graphic T-Shirt
                            </h4>
                            <div className="text-xs lg:text-sm">
                              Size: <span className="text-black/60">Large</span>
                            </div>
                            <div className="text-xs lg:text-sm">
                              Color:
                              <span className="text-black/60">White</span>
                            </div>
                          </div>

                          <span className="text-xl font-bold lg:text-2xl">
                            $145
                          </span>
                        </div>

                        {/* Price */}
                        <div className="flex flex-col items-end justify-between gap-4">
                          <Trash2 className="size-5 cursor-pointer text-red-500 duration-300 hover:opacity-80 lg:size-6" />
                          <QuantitySelector />
                        </div>
                      </div>

                      {/* Mobile */}
                      <div className="flex w-full flex-col justify-between gap-3 lg:hidden">
                        {/* Product Information */}
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="line-clamp-1 text-base font-bold lg:text-xl">
                              Gradient Graphic T-Shirt
                            </h4>
                            <div className="text-xs lg:text-sm">
                              Size: <span className="text-black/60">Large</span>
                            </div>
                            <div className="text-xs lg:text-sm">
                              Color:
                              <span className="text-black/60">White</span>
                            </div>
                          </div>
                          <Trash2 className="size-5 cursor-pointer text-red-500 duration-300 hover:opacity-80 lg:size-6" />
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-xl font-bold lg:text-2xl">
                            $145
                          </span>
                          <QuantitySelector />
                        </div>
                      </div>
                    </div>

                    {!isLastItem && <Separator className="my-4 lg:my-6" />}
                  </Fragment>
                );
              })}
            </div>
          </div>

          {/* Order summary */}
          <div className="col-span-full lg:col-span-5">
            <div className="sticky top-2 w-full space-y-6 rounded-md border px-6 py-5">
              <h3 className="text-xl font-bold lg:text-2xl">Order Summary</h3>
              {/* Price */}
              <div className="space-y-5">
                <div className="flex items-center justify-between text-base lg:text-xl">
                  <span className="text-black/60">Subtotal</span>
                  <span className="font-bold">$565</span>
                </div>

                <div className="flex items-center justify-between text-base lg:text-xl">
                  <span className="text-black/60">Discount (-20%)</span>
                  <span className="font-bold text-red-500">-$113</span>
                </div>

                <div className="flex items-center justify-between text-base lg:text-xl">
                  <span className="text-black/60">Delivery Fee</span>
                  <span className="font-bold">$15</span>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <span className="text-base lg:text-xl">Total</span>
                  <span className="text-xl font-bold lg:text-2xl">$467</span>
                </div>
              </div>

              {/* Promotion */}
              <div className="flex items-center justify-between gap-3">
                <div className="relative flex w-full items-center rounded-md bg-[#f0f0f0] px-4 text-black/40">
                  <Tag className="size-4" />
                  <Input
                    className="border-transparent shadow-none focus-visible:ring-0"
                    placeholder="Add promocode"
                  />
                </div>

                <Button>Apply</Button>
              </div>

              <Button size="lg" className="w-full">
                Go to checkout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </main>
  );
};

export default CartPage;
