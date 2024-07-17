import { getEntriesHomepage } from "@/libs/contentful";
import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import OrangeBtn from "./OrangeBtn";
import ProjectsCard from "./ProjectCard";

const Project = async () => {
  const projects = await getEntriesHomepage();

  return (
    <>
      <Box bg="#f5f5f5" py={8} justifyContent="space-between">
        <Container maxW="7xl">
          <Flex
            gap={10}
            direction={{ base: "column", md: "row" }}
            align="center"
          >
            <Heading width={{ base: "100%", md: "50%" }}>
              Building Tomorrow's Landmarks with Experts Precision.
            </Heading>
            <Text width={{ base: "100%", md: "50%" }}>
              The type of construction projects our company specializes in
              include residental, commercial, industrialm, and renovation
              projects.
            </Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            gap={6}
            py={8}
          >
            <Text flex={1} color="#F55E41" fontSize="lg" fontWeight="semibold">
              Our Recent Project
            </Text>

            <Box flex={1} textAlign="right">
              <OrangeBtn btnText="See More" />
            </Box>
          </Flex>
          <Grid
            templateColumns={{ base: "2fr", md: "repeat(3, 1fr)" }}
            gap={{ base: "1rem", md: "1.5rem" }}
          >
            {projects?.projects.map((project: any, index: number) => {
              return (
                <ProjectsCard
                  key={index}
                  image={`https:${project.fields.img.fields.file.url}`}
                  title={project.fields.title}
                  place={project.fields.place}
                  alt="Cultural Mosaic Cente Picture"
                />
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Project;
