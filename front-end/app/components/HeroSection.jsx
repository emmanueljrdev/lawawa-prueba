"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  const container = {
    h: "full",
    w: "full",
    bg: "transparent",
    rounded: "3xl",
    mx: 4,
  };

  const titleContainer = {
    h: "full",
    w: "40%",
    justifyContent: "center",
    flexDirection: "column",
    gap: 8,
    color: "black",
  };

  const imageContainer = {
    h: "full",
    w: "60%",
    alignItems: "center",
    justifyContent: "center",
    display: {
      base: "none",
      lg: "flex",
    },
  };

  const titleStyles = {
    fontSize: "50px",
  };

  const descriptionStyles = {
    fontSize: "20px",
    fontWeight: "light",
  };

  const imageStyles = {
    h: "30rem",
    w: "30rem",
  };

  const btnStyles = {
    p: 2,
    rounded: "md",
    textDecoration: "none",
    w: "15rem",
    bg: "#2dc7ff  ",
    bgGradient: "linear(to-r, #583fff, #55237d)",
    color: "white",
    textTransform: "uppercase",
    ":hover": {
      bgGradient: "linear(to-r, #556eff, #55237d)",
      textDecoration: "none",
    },
  };

  return (
    <Flex sx={container}>
      <Flex sx={titleContainer}>
        <Heading sx={titleStyles}>
          Despreocúpate y viaja con nosotros. {""}
          <TypeAnimation
            sequence={[
              "Útil",
              1500,
              "Rápido",
              1500,
              "Divertido",
              1500,
              "MovyApp",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </Heading>

        <Text sx={descriptionStyles}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe qui
          voluptatum non libero aliquid dolores praesentium recusandae iste
          debitis necessitatibus?
        </Text>

        <Link textDecoration="none" href="/dashboard" sx={btnStyles}>
          Ir a la app
        </Link>
      </Flex>
      <Flex sx={imageContainer}></Flex>
    </Flex>
  );
}
