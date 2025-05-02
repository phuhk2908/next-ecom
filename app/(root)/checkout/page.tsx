"use client";

import Breadcrumbs from "@/components/shared/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import AddressForm from "@/components/form/address-form";
import Newsletter from "@/components/shared/Newsletter";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Cart", href: "/cart" },
  { label: "Checkout" },
];

const CheckoutPage = () => {
  return (
    <main className="">
      <div className="container">
        <Breadcrumbs breadcrumbs={breadcrumbs} className="mt-6" />

        <h2 className="my-6 font-integral text-2xl font-bold lg:text-4xl">
          CHECKOUT
        </h2>

        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-full lg:col-span-7">
            <div className="rounded-md border p-[14px] lg:px-6 lg:py-5">
              <AddressForm />
            </div>
          </div>

          {/* Order summary */}
          <div className="col-span-full lg:col-span-5">
            <div className="w-full space-y-6 rounded-md border px-6 py-5">
              <h3 className="text-xl font-bold lg:text-2xl">Your Order</h3>

              {/* Order Items */}
              <div className="flex gap-4">
                <div className="size-20 flex-shrink-0 overflow-hidden rounded">
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
                <div className="flex w-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <h4 className="line-clamp-1 text-base font-bold lg:text-xl">
                      Gradient Graphic T-Shirt
                    </h4>

                    <div className="">$2,500</div>
                  </div>

                  <div className="text-xs text-black/60 lg:text-sm">Grey</div>
                  <div className="text-xs text-black/60 lg:text-sm">x1</div>
                </div>
              </div>

              <Separator />

              {/* Price */}
              <div className="space-y-5">
                <div className="flex items-center justify-between text-base lg:text-xl">
                  <span className="text-black/60">Applied discount code</span>
                  <Badge variant="destructive">20% OFF</Badge>
                </div>

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

              <Link
                href="#"
                className={cn(
                  "w-full",
                  buttonVariants({
                    size: "lg",
                  }),
                )}
              >
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </main>
  );
};

export default CheckoutPage;
