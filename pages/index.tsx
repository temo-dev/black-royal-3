import { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import HeroHeader from "../components/HeroHeader";
import { FeaturesCards } from "../components/FeatureCards";
import SellProduct from "../components/SellProduct";
import { GetInTouch } from "../components/GetInTouch";
import { ImageActionBanner } from "../components/ImageActionBanner";
import { useAppStore } from "../services/stores/appStore";
import { Container } from "@mantine/core";

export default function IndexPage() {
  const lang = useAppStore((state) => state.language);
  console.log("language", lang);
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const slides = [0, 1, 2, 3].map((item) => (
    <Carousel.Slide key={item}>
      <HeroHeader />
    </Carousel.Slide>
  ));
  const slides2 = [0, 1, 2, 3].map((item) => (
    <Carousel.Slide key={item}>
      <ImageActionBanner />
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
      <Container mb={50} mt={50}>
        <Carousel
          withIndicators
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideGap={{ base: 0, sm: "md" }}
          loop
          align="start"
        >
          {slides2}
        </Carousel>
      </Container>
      <GetInTouch />
    </>
  );
}
