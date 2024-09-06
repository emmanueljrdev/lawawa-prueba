"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";
import HeroSection from "../components/HeroSection";
import { BusRoutes } from "../components/BusRoutes";

export default function Page() {
  const container = {
    h: "100vh",
    p: 20,
    gap: 4,
    flexDirection: "column",
    overflow: "auto",
    bgImage: "url('/images/city_landing_page-2.jpg')",
    bgSize: "cover",
    bgRepeat: "no-repeat",
    bgPosition: "center",
  };

  const navBar = {};

  return (
    <Flex sx={container}>
      <Heading>Rutas de viajes</Heading>
      <BusRoutes />
    </Flex>
  );
}
