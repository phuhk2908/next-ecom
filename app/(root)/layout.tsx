import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TransitionProvider from "@/components/providers/transition-provider";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <TransitionProvider>{children}</TransitionProvider>
      <Footer />
    </>
  );
};

export default MainLayout;
