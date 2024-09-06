"use client";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

export default function Page({ params }) {
  // Hook

  const toast = useToast();

  // Estados

  const [route, setRoute] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const id = params.id;

  // Funciones

  const fetchRoute = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/routes/${id}`);
      setRoute(response.data);
      console.log(response.data);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching routes:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoute();
  }, []);

  const handleClick = () => {
    setIsSubmitting(true);
    console.log(route.estado);

    route.estado === "expirado"
      ? (toast({
          title: "Ruta expirada",
          description: "Esta ruta ya no está disponible.",
          status: "error",
          duration: 3000,
        }),
        setIsSubmitting(false))
      : (toast({
          title: "Ruta agendada",
          description: "Su ruta se ha agendado correctamente.",
          status: "success",
          duration: 3000,
        }),
        setIsSubmitting(false));
  };

  // Estilos
  const container = {
    h: "100vh",
    p: { base: 4, lg: 20 },
    flexDirection: "column",
    gap: 4,
    overflow: "auto",
    bgImage: "url('/images/city_landing_page-2.jpg')",
    bgSize: "cover",
    bgRepeat: "no-repeat",
    bgPosition: "center",
  };

  const detailsContainer = {
    h: "30rem",
    bg: "gray.100",
    shadow: "xl",
    maxW: "4xl",
    p: 8,
    w: "full",
    rounded: "xl",
    gap: 8,
    color: "black",
  };

  const detailsFlex = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const titleContainer = {
    gap: 4,
  };

  const titleStyles = {
    fontWeight: "bold",
    fontSize: "xl",
  };

  const descriptionStyles = {
    fontWeight: "light",
    fontSize: "xl",
    textTransform: "capitalize",
  };

  const btnContainer = {
    h: "full",
    alignItems: "center",
    justifyContent: "center",
  };

  const btnStyles = {
    color: "white",
    w: "10rem",
    py: 2,
    px: 6,
    bgGradient: "linear(to-r, #583fff, #55237d)",
    ":hover": {
      bgGradient: "linear(to-r, #556eff, #55237d)",
    },
  };

  const imageContainer = {
    w: "full",
    h: "auto",
    aspectRatio: 20 / 9,
  };

  const imageStyles = {
    w: "full",
    h: "full",
    bgImage: "url('/images/bus-side.png')",
    bgSize: "cover",
    bgRepeat: "no-repeat",
    bgPosition: "center",
  };

  return (
    <Flex sx={container}>
      <Heading>Detalles del viaje</Heading>
      <Grid
        sx={detailsContainer}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      >
        <GridItem key={route.id} sx={detailsFlex} rowSpan={1}>
          {/* Origen */}
          <Flex sx={titleContainer}>
            <Text sx={titleStyles}>Origen</Text>
            <Text sx={descriptionStyles}>{route.origen}</Text>
          </Flex>

          {/* Destino */}
          <Flex sx={titleContainer}>
            <Text sx={titleStyles}>Destino</Text>
            <Text sx={descriptionStyles}>{route.destino}</Text>
          </Flex>

          {/* Precio */}
          <Flex sx={titleContainer}>
            <Text sx={titleStyles}>Precio</Text>
            <Text sx={descriptionStyles}>{route.precio}$</Text>
          </Flex>

          {/* Horario */}
          <Flex sx={titleContainer}>
            <Text sx={titleStyles}>Hora de salida</Text>
            <Text sx={descriptionStyles}>{route.hora_salida}</Text>
          </Flex>

          <Flex sx={titleContainer}>
            <Text sx={titleStyles}>Hora de llegada</Text>
            <Text sx={descriptionStyles}>{route.hora_llegada}</Text>
          </Flex>

          {/* Capacidad */}
          <Flex sx={titleContainer}>
            <Text sx={titleStyles}>Capacidad</Text>
            <Text sx={descriptionStyles}>{route.capacidad}</Text>
          </Flex>

          {/* Disponibilidad */}
          <Flex sx={titleContainer}>
            <Text sx={titleStyles}>Disponibilidad</Text>
            <Text sx={descriptionStyles}>{route.estado}</Text>
          </Flex>
        </GridItem>

        <GridItem sx={detailsFlex}>
          <Flex sx={btnContainer}>
            <Button
              sx={btnStyles}
              isLoading={isSubmitting}
              loadingText="Cargando..."
              spinnerPlacement="end"
              onClick={handleClick}
            >
              Agendar viaje
            </Button>
          </Flex>
        </GridItem>
      </Grid>

      {/* Imagen referencial */}
      <Box sx={imageContainer}>
        <Heading>Este será tu bus</Heading>
        <Box sx={imageStyles}></Box>
      </Box>
    </Flex>
  );
}
