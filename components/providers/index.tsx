"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import ReactQueryProvider from "./query-provider";

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
        {children}
      </ThemeProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
