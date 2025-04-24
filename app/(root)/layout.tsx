import Footer from "@/components/footer";
import Header from "@/components/header";
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
