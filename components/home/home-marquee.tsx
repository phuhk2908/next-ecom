import Marquee from "@/components/shared/Marquee";
import React from "react";

const HomeMarquee = () => {
  const marqueeItems = [
    "VERSACE",
    "ZARA",
    "GUCCI",
    "PRADA",
    "Calvin Klein",
  ];

  return <Marquee items={marqueeItems} duration={15} pauseOnHover={true} />;
};

export default HomeMarquee;
