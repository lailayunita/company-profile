import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import PillImage from "./PillImage";
import { getEntriesHomepage } from "@/libs/contentful";

const HeroSection = async () => {
  const jumbotron = await getEntriesHomepage();

  return (
    <>
      <Container maxW="7xl" py="6">
        <Grid
          templateColumns={{ base: "1fr", md: "3.5fr 1.5fr" }}
          gap={6}
          alignItems="center"
        >
          <GridItem
            fontSize={{ base: "3xl", sm: "5xl", xl: "7xl" }}
            fontWeight="bold"
            py={2}
          >
            <Grid templateRows="1fr 1fr">
              <HStack>
                <Text>YOUR</Text>
                <PillImage src="https://images.unsplash.com/photo-1528991191763-275f9418709f?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Text>VISION.</Text>
              </HStack>
              <HStack alignItems="center">
                <Text>OUR BLUEPRINT.</Text>
                <PillImage src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </HStack>
            </Grid>
          </GridItem>
          <GridItem textAlign="left">
            <Grid>
              <Text fontSize="md" mb={7}>
                Showcasing Our Diverse Construction Portfolio, Expert Services,
                Satisfied Client Testimonials, and Convenient Inquiry Channels
              </Text>
              <HStack gap={6}>
                <Text fontSize="5xl" fontWeight="bold">
                  10k+
                </Text>
                <Box as="span" fontSize="xl" fontWeight="normal">
                  <Flex direction="column" gap={2}>
                    <Text>Happy</Text>
                    <Text>Homeowners</Text>
                  </Flex>
                </Box>
              </HStack>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
      <Grid
        templateColumns={{ base: "2fr 3fr", md: "1fr 3fr" }}
        gap={{ base: "1rem", md: "1.5rem" }}
        pb={8}
      >
        <Box position="relative" height={{ base: "250px", md: "420px" }}>
          <Image
            alt="thumbnail 1"
            src={`https:${jumbotron?.thumbnail.fields.file.url}`}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover",
              // cover, contain, none
            }}
          />
        </Box>
        <Box position="relative" height={{ base: "250px", md: "420px" }}>
          <Image
            alt="thumbnail 2"
            src={`https:${jumbotron?.thumbnail2.fields.file.url}`}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover",
              // cover, contain, none
            }}
          />
        </Box>
      </Grid>
    </>
  );
};

export default HeroSection;
