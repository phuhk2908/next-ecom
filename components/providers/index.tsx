"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import ReactQueryProvider from "./query-provider";
import { Toaster } from "../ui/toaster";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ReactQueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />
        {children}
      </ThemeProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
