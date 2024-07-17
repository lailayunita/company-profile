import { Container, Grid, Heading, Text, VStack } from "@chakra-ui/react";

import TestimoniCard from "./TestimoniCard";
import { getEntriesHomepage } from "@/libs/contentful";

const Testimonials = async () => {
  const testimonials = await getEntriesHomepage();
  return (
    <Container maxW="7xl">
      <VStack>
        <Text color="#F55E41" fontSize="lg" fontWeight="semibold">
          Our Testimonials
        </Text>
        <Heading>What People Say About Us?</Heading>
      </VStack>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={6} py={8}>
        {testimonials?.testimonials.map((testimoni: any, index: number) => {
          return (
            <TestimoniCard
              key={index}
              profilepic={`https:${testimoni.fields.profilepic.fields.file.url}`}
              name={testimoni.fields.name}
              testimoni={testimoni.fields.review}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default Testimonials;
