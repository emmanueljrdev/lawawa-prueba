import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  useDisclosure,
  IconButton,
  Heading,
  Icon,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";

export const BusRoutes = () => {
  // Estados

  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Funciones

  const fetchRoutes = async () => {
    try {
      const response = await axios.get("http://localhost:8080/routes/all");
      setRoutes(response.data);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching routes:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoutes();
  }, []);

  // Estilos

  const container = {
    h: "full",
    maxW: "xl",
  };

  const gridContainer = {
    rounded: "xl",
    h: "auto ",
    w: "auto",
    gap: 8,
  };

  const gridItemStyles = {
    h: 36,
    rounded: "xl",
    p: 8,
    bg: "gray.100",
    shadow: "xl",
    display: "flex",
    alignItems: "center",
    fontSize: "20px",
    gap: 4,
    justifyContent: "space-between",
  };

  const cityStyles = {
    gap: 4,
    alignItems: "center",
    flexDirection: "column",
  };

  const priceStyles = {
    gap: 4,
    alignItems: "center",
    flexDirection: "column",
  };

  const timeStyles = {
    gap: 4,
    alignItems: "center",
    flexDirection: "column",
  };

  const titleStyles = {
    fontWeight: "bold",
  };

  const buttonStyles = {
    p: 2,
    rounded: "xl",
    ":hover": {
      color: "blue",
      textDecoration: "none",
    },
  };

  return (
    <Box sx={container}>
      <Grid templateRows="repeat(10, 1fr)" sx={gridContainer}>
        {routes.map((route) =>
          route.estado === "expirado" ? (
            <GridItem id={route.id} key={route.id} sx={gridItemStyles}>
              <Flex sx={cityStyles}>
                <Text sx={titleStyles}>Ruta</Text>

                <Flex gap={4}>
                  <Text>{route.origen}</Text>
                  <Icon boxSize={8} as={HiArrowLongRight} />
                  <Text>{route.destino}</Text>
                </Flex>
              </Flex>

              <Flex sx={priceStyles}>
                <Text sx={titleStyles}>Precio</Text>
                <Text>{route.precio}$</Text>
              </Flex>

              <Flex sx={timeStyles}>
                <Text color="red">Expirado</Text>
              </Flex>
            </GridItem>
          ) : (
            <GridItem id={route.id} key={route.id} sx={gridItemStyles}>
              <Flex sx={cityStyles}>
                <Text sx={titleStyles}>Ruta</Text>

                <Flex gap={4}>
                  <Text>{route.origen}</Text>
                  <Icon boxSize={8} as={HiArrowLongRight} />
                  <Text>{route.destino}</Text>
                </Flex>
              </Flex>

              <Flex sx={priceStyles}>
                <Text sx={titleStyles}>Precio</Text>
                <Text>{route.precio}$</Text>
              </Flex>

              <Flex sx={timeStyles}>
                <Link sx={buttonStyles} href={`/dashboard/${route.id}`}>
                  Ver detalles
                </Link>
              </Flex>
            </GridItem>
          )
        )}
      </Grid>
    </Box>
  );
};
