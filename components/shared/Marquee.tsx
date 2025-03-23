"use client";

import { useEffect, useRef, useCallback, useMemo } from "react";
import gsap from "gsap";

interface MarqueeProps<T> {
  items: T[];
  duration?: number;
  pauseOnHover?: boolean;
  renderItem?: (item: T, index: number) => React.ReactNode;
  minItemsToShow?: number;
}

const Marquee = <T,>({
  items,
  duration = 15,
  pauseOnHover = true,
  renderItem = (item) => String(item),
  minItemsToShow = 10,
}: MarqueeProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cloneRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  // Memoize repeated items calculation
  const repeatedItems = useMemo(() => {
    if (items.length === 0) return [];
    const repeatCount = Math.max(1, Math.ceil(minItemsToShow / items.length));
    return Array(repeatCount)
      .fill([...items])
      .flat();
  }, [items, minItemsToShow]);

  // Memoize animation setup
  const setupAnimation = useCallback(() => {
    if (!contentRef.current || !cloneRef.current || !containerRef.current)
      return;

    // Kill existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    const marqueeWidth = contentRef.current.offsetWidth;
    const containerWidth = containerRef.current.offsetWidth;

    // Center content if shorter than container
    if (marqueeWidth <= containerWidth && items.length >= minItemsToShow) {
      gsap.set([contentRef.current, cloneRef.current], {
        clearProps: "all",
      });
      gsap.set(contentRef.current, {
        x: (containerWidth - marqueeWidth) / 2,
      });
      gsap.set(cloneRef.current, { x: containerWidth });
      return;
    }

    // Setup infinite scroll animation
    gsap.set(contentRef.current, { x: 0 });
    gsap.set(cloneRef.current, { x: marqueeWidth });

    const tl = gsap.timeline({
      repeat: -1,
      onComplete: () => {
        if (contentRef.current && cloneRef.current) {
          gsap.set(contentRef.current, { x: 0 });
          gsap.set(cloneRef.current, { x: marqueeWidth });
        }
      },
    });

    tl.to([contentRef.current, cloneRef.current], {
      x: `-=${marqueeWidth}`,
      duration,
      ease: "none",
    });

    animationRef.current = tl;
  }, [duration, items.length, minItemsToShow]);

  // Handle resize
  useEffect(() => {
    const ctx = gsap.context(() => {});
    const handleResize = () => {
      setupAnimation();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.kill();
    };
  }, [setupAnimation]);

  // Setup initial animation
  useEffect(() => {
    setupAnimation();
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [setupAnimation, repeatedItems]);

  // Handle hover pause
  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) return;

    const container = containerRef.current;
    const animation = animationRef.current;

    const handleMouseEnter = () => animation?.pause();
    const handleMouseLeave = () => animation?.play();

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pauseOnHover]);

  // Memoize item renderer
  const renderItems = useCallback(
    (isClone = false) =>
      repeatedItems.map((item, index) => (
        <div
          key={`${isClone ? "clone" : "item"}-${index}`}
          className="px-5 text-3xl font-bold text-white"
        >
          {renderItem(item, index % items.length)}
        </div>
      )),
    [repeatedItems, items.length, renderItem],
  );

  return (
    <div
      ref={containerRef}
      className="relative h-24 w-full overflow-hidden bg-primary"
    >
      <div
        ref={contentRef}
        className="absolute flex h-full items-center whitespace-nowrap"
      >
        {renderItems()}
      </div>
      <div
        ref={cloneRef}
        className="absolute flex h-full items-center whitespace-nowrap"
      >
        {renderItems(true)}
      </div>
    </div>
  );
};

export default Marquee;
