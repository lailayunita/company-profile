import ImageComponent from "@/components/ImageComponent";
import Jumbotron from "@/components/Jumbotron";
import TeamCard from "@/components/TeamCard";
import Values from "@/components/Values";
import { getEntriesValues } from "@/libs/contentful";
import { Box, Container, Flex, Grid, Text, VStack } from "@chakra-ui/react";

const AboutPage = async () => {
  const values = await getEntriesValues();
  return (
    <Box>
      <Jumbotron
        title="About Us"
        desc="Welcome to Builders, where we bring your architectural dreams to life. With a commitment to excellence and a passion for innovation, we strive to create structures that inspire and endure. Our dedicated team works tirelessly to deliver outstanding construction projects, ensuring that each project is a testament to our craftsmanship and precision."
      />
      <Container
        maxW="7xl"
        py={8}
        display="flex"
        flexDirection="column"
        gap={8}
      >
        <Grid
          templateColumns={{ base: "1fr", md: "3fr 2fr" }}
          gap={8}
          alignItems="center"
        >
          <Flex direction="column" gap={2}>
            <Text fontSize="3xl" fontWeight="semibold">
              Our History
            </Text>
            <Text>
              Since our founding in 2010, Builders has been dedicated to
              creating architectural marvels that stand the test of time. From
              our humble beginnings as a small construction firm, we have grown
              into a leading company known for our commitment to quality and
              innovation.
            </Text>
          </Flex>
          <ImageComponent
            src="/about1.webp"
            alt="our history"
            height={{ base: "200px", md: "250px" }}
          />
        </Grid>
        <Grid
          templateColumns={{ base: "1fr", md: "2fr 3fr" }}
          templateAreas={{ base: `"text" "image"`, md: `"image text"` }}
          gap={10}
          alignItems="center"
        >
          <Box gridArea="image">
            <ImageComponent
              src="/about2.webp"
              alt="our history"
              height={{ base: "200px", md: "250px" }}
            />
          </Box>
          <Flex direction="column" gridArea="text" gap={2}>
            <Text fontSize="3xl" fontWeight="semibold">
              Our Mission
            </Text>
            <Text>
              Our mission is to deliver exceptional construction projects that
              not only meet but exceed our clients' expectations. We strive to
              innovate and push the boundaries of what is possible in the
              construction industry, all while maintaining the highest standards
              of craftsmanship and sustainability.
            </Text>
          </Flex>
        </Grid>
        <Grid
          templateColumns={{ base: "1fr", md: "3fr 2fr" }}
          gap={6}
          alignItems="center"
        >
          <Flex direction="column" gap={2}>
            <Text fontSize="3xl" fontWeight="semibold">
              Our Vision
            </Text>
            <Text>
              We envision a future where Builders leads the way in sustainable
              construction practices, creating structures that are not only
              beautiful and functional but also environmentally friendly. Our
              goal is to be at the forefront of the industry, setting new
              benchmarks for excellence.
            </Text>
          </Flex>
          <ImageComponent
            src="/about3.webp"
            alt="our history"
            height={{ base: "200px", md: "250px" }}
          />
        </Grid>
      </Container>
      <Box bg="#f5f5f5">
        <Container maxW="7xl" pb={8}>
          <VStack p={4} gap={6}>
            <Text fontSize="3xl" fontWeight="semibold">
              Our Values
            </Text>
            <Grid
              templateColumns={{ base: "1fr ", md: "repeat(5, 1fr)" }}
              gap={4}
            >
              {values?.map((value: any, index: number) => {
                return (
                  <Values
                    key={index}
                    icon={value.icon.fields.file.url}
                    value={value.value}
                    desc={value.desc}
                  />
                );
              })}
            </Grid>
          </VStack>
        </Container>
      </Box>
      <Container maxW="7xl" py={10}>
        <VStack gap={6}>
          <Text fontSize="3xl" fontWeight="semibold">
            Meet Our Team
          </Text>
          <Grid
            templateColumns={{ base: "1fr ", md: "repeat(3, 1fr)" }}
            gap={6}
          >
            <TeamCard
              name="Jessica Claudia"
              profilepic="https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <TeamCard
              name="Ahmad Alex"
              profilepic="https://images.unsplash.com/photo-1628499636754-3162d34ca39c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <TeamCard
              name="Cristiano Ronaldo"
              profilepic="https://images.unsplash.com/photo-1611244420182-82cc3323eadc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxwZXJzb258ZW58MHx8MHx8fDI%3D"
            />
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutPage;
