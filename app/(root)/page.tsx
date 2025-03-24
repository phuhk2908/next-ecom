import HomeCarousel from "@/components/home/home-carousel";
import HomeHero from "../../components/home/home-hero";
import HomeMarquee from "../../components/home/home-marquee";
import { Separator } from "@/components/ui/separator";
import HomeBrowse from "@/components/home/home-browse";
import Newsletter from "@/components/shared/Newsletter";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeMarquee />

      <HomeCarousel title="New arrivals" />
      <Separator className="my-4" />
      <HomeCarousel title="Top selling" />

      <HomeBrowse />

      <Newsletter />
    </>
  );
}
