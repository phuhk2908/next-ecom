"use client";

import type React from "react";

import { useState, useTransition } from "react";

import { Facebook, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Separator } from "@/components/ui/separator";
import GoogleIcon from "../icons/GoogleIcon";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { ZodType } from "zod";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface Props<T extends FieldValues> {
  type: "SIGN_IN" | "SIGN_UP";
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<AuthActionResult>;
}
import { zodResolver } from "@hookform/resolvers/zod";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";

export const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) => {
  const isSignIn = type === "SIGN_IN";
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (values) => {
    setError("");

    startTransition(async () => {
      try {
        const data = await onSubmit(values);

        if (data?.error) {
          setError(data.error);

          return;
        }

        if (data?.success) {
          form.reset();
          router.push("/");
        }
      } catch (error: any) {
        console.log(error);
      }
    });
  };

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel>
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>

                  <FormControl>
                    <Input
                      required
                      disabled={isPending}
                      type={
                        field.name === "confirmPassword"
                          ? "password"
                          : FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          {error && <div className="text-destructive">{error}</div>}
          <Button type="submit" className="mt-4 w-full" disabled={isPending}>
            {isSignIn ? "Login to your Account" : "Create an Account"}
            {isPending && <Loader2 className="animate-spin ml-1 size-4" />}
          </Button>
        </form>
      </Form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" type="button" className="w-full">
          <GoogleIcon />
          Google
        </Button>
        <Button variant="outline" type="button" className="w-full">
          <Facebook className="mr-2 h-4 w-4 text-blue-600" />
          Facebook
        </Button>
      </div>
    </div>
  );
};
