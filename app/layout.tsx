import type { Metadata } from "next";
import "./globals.css";
import Providers from "../components/providers";
import Header from "../components/Header";
import { integral, satoshi } from "@/lib/fonts";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${satoshi.variable} ${integral.variable} font-satoshi antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
