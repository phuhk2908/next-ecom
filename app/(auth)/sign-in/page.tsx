"use client";

import { AuthForm } from "@/components/form/AuthForm ";
import { signInSchema } from "@/lib/validation";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="flex w-full items-center justify-center px-4 py-12 md:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-muted-foreground">
            Enter your credentials to access your account
          </p>
        </div>

        <AuthForm
          type="SIGN_IN"
          schema={signInSchema}
          defaultValues={{
            email: "",
            password: "",
          }}
          onSubmit={async () =>
            await Promise.resolve({ success: true, data: {}, error: "" })
          }
        />

        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-primary underline underline-offset-4"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
