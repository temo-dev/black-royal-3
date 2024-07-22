import { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import HeroHeader from "../components/HeroHeader";
import { FeaturesCards } from "../components/FeatureCards";
import SellProduct from "../components/SellProduct";
import { GetInTouch } from "../components/GetInTouch";
import FeedBack from "../components/FeedBack";

export default function IndexPage() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const slides = [0, 1, 2].map((item) => (
    <Carousel.Slide key={item}>
      <HeroHeader />
    </Carousel.Slide>
  ));
  return (
    <>
      <Carousel
        withIndicators
        slideGap="md"
        align="start"
        withControls={false}
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {slides}
      </Carousel>
      <FeaturesCards />
      <SellProduct />
      <FeedBack />
      <GetInTouch />
    </>
  );
}
