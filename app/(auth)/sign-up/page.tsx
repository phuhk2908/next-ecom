"use client";

import { AuthForm } from "@/components/form/auth-form";
import { signUpSchema } from "@/lib/validation";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex w-full items-center justify-center px-4 py-12 md:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-muted-foreground">
            Create an account to get started
          </p>
        </div>

        <AuthForm
          type="SIGN_UP"
          schema={signUpSchema}
          defaultValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={async () =>
            await Promise.resolve({ success: true, data: {}, error: "" })
          }
        />

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-medium text-primary underline underline-offset-4"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
