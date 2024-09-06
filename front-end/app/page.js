"use client";

import { Box, Flex } from "@chakra-ui/react";
import HeroSection from "./components/HeroSection";

export default function Home() {
  const container = {
    bg: "gray.100",
    h: "100vh",
    alignItems: "center",
    bgSize: "cover",
    bgRepeat: "no-repeat",
    bgPosition: "center",
    p: 12,
    position: "relative",
    bgImage: "url('/images/city_landing_page-2.jpg')",
  };

  return (
    <Flex sx={container}>
      <HeroSection />
    </Flex>
  );
}
