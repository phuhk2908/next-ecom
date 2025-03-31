import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="relative hidden w-full md:block md:w-1/2">
        <Image
          src="https://images.unsplash.com/photo-1610384104075-e05c8cf200c3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D"
          alt="Authentication"
          fill
          sizes="50vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="relative flex w-full items-center justify-center px-4 py-12 md:w-1/2 md:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-md space-y-6">
          <Link
            className={cn(
              "absolute left-2 top-2 flex items-center !text-gray-500",
              buttonVariants({ variant: "link" }),
            )}
            href="/"
          >
            <ChevronLeft className="size-4" />
            Back to homepage
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
