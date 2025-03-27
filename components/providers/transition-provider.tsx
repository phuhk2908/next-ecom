"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ReactNode } from "react";

const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      // Page enter animation
      gsap.fromTo(
        wrapperRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
      );
    }
  }, [pathname]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default TransitionProvider;
