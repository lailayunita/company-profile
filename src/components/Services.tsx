import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { FiMinus } from "react-icons/fi";
import ServicesCard from "./ServicesCard";
import OrangeBtn from "./OrangeBtn";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <Container maxW="7xl" py={8}>
        <Text color="#F55E41" fontSize="lg" fontWeight="semibold">
          Our Services
        </Text>
        <Grid
          templateColumns={{ base: "1fr", md: "6fr 1fr" }}
          alignItems="center"
          gap={2}
          py={6}
        >
          <Heading>
            Tailored Solution to <br /> Bring Your Vision to Life
          </Heading>
          <Link href="/services">
            <OrangeBtn btnText="Browse all services" />
          </Link>
        </Grid>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
          gap={6}
          py={8}
        >
          <ServicesCard
            image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Construction Consultant"
          />
          <ServicesCard
            image="https://images.unsplash.com/photo-1527199768775-bdabf8b32f61?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Preconstruction Service"
          />
          <ServicesCard
            image="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="House Renovation"
          />
        </Grid>
      </Container>
    </>
  );
};

export default Services;
