import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

interface Jumbotron {
  title: string;
  desc: string;
}

const Jumbotron: FC<Jumbotron> = ({ title, desc }) => {
  return (
    <>
      <Box bg="#F5F5F5" py={10}>
        <Container maxW="7xl">
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            alignItems="center"
            gap={6}
          >
            <Box>
              <Heading
                display="inline-block"
                color="#f55e41"
                borderBottom="3px solid #f55e41"
                pb={6}
              >
                {title}
              </Heading>
            </Box>
            <Text>{desc}</Text>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Jumbotron;
