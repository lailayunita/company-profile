import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import ImageComponent from "./ImageComponent";

const Vision = () => {
  return (
    <Container maxW="7xl" py={8}>
      <Grid
        templateColumns={{ base: "1fr", md: "2fr 3fr" }}
        gap={6}
        alignItems="center"
      >
        <Flex direction="column" gap={4}>
          <Text color="#F55E41" fontSize="lg" fontWeight="semibold">
            About Builders
          </Text>
          <Heading>A Premier Construction Company</Heading>
          <Text>
            Builders is a premier construction company dedicated to transforming
            architectural dreams into reality. We specialize in delivering
            top-notch residential, commercial, industrial, and renovation
            projects. Our team is committed to excellence, precision, and
            innovation, ensuring every project exceeds client expectations with
            outstanding craftsmanship and sustainable practices.
          </Text>
        </Flex>
        <ImageComponent
          src="https://images.unsplash.com/photo-1693639385915-d7a7ddefe8e1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="construction"
          height={{ base: "250px", md: "500px" }}
        />
      </Grid>

      {/* <Flex gap={6} direction={{ base: "column", md: "row" }}>
        <Stack width={{ base: "100%", md: "45%" }}>
          <Heading>Vision Forge</Heading>
          <Text>
            Where Dreams Take Shape, Creating Unforgettable Architectural
            Wonders with Expert Craftsmanship and Prescision Execution,
            Transforming Inspirations into Magnificent, Enduring Architectural
            Masterpieces Expert Craftsmanship and Precision
          </Text>
          <ImageComponent
            src="https://images.unsplash.com/photo-1693639385915-d7a7ddefe8e1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="construction"
            height={{ base: "250px", md: "500px" }}
          />
        </Stack>
        <Flex
          direction={{ base: "column-reverse", md: "column" }}
          width={{ base: "100%", md: "65%" }}
          gap={6}
        >
          <ImageComponent
            src="https://images.unsplash.com/photo-1693661391267-ad955aeeb564?q=80&w=2846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="construction"
            height={{ base: "250px", md: "320px" }}
          />

          <Box>
            <Text>
              Our company specializes in a wide range of construction projects,
              including:
            </Text>
            <UnorderedList>
              <ListItem>
                Residential Projects: From single-family homes to large
                residential complexes, we create living spaces that are both
                functional and aesthetically pleasing.
              </ListItem>

              <ListItem>
                Commercial Projects: We build commercial spaces such as office
                buildings, retail stores, and shopping centers that meet the
                needs of businesses and their customers.
              </ListItem>

              <ListItem>
                Industrial Projects: Our expertise extends to the construction
                of factories, warehouses, and other industrial facilities
                designed for efficiency and productivity.
              </ListItem>

              <ListItem>
                Renovation Projects: We breathe new life into existing
                structures with our renovation services, enhancing their
                functionality and appearance.
              </ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      </Flex> */}
    </Container>
  );
};

export default Vision;
