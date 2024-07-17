import {
  Box,
  Container,
  Flex,
  Grid,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaCircleCheck } from "react-icons/fa6";
import AchievmentItem from "./AchievmentItem";

const Achievment = () => {
  return (
    <Box bg="#f5f5f5">
      <Container maxW="7xl" py={8}>
        <Grid
          templateColumns={{ base: "1fr 1fr", md: "repeat(4 , 1fr)" }}
          gap={3}
          pb={6}
        >
          <AchievmentItem num="350+" text="Sucessful projects" />
          <AchievmentItem num="65+" text="Team members" />
          <AchievmentItem num="80+" text="Happy clients" />
          <AchievmentItem num="100%" text="Clients satisfaction" />
        </Grid>
        <Grid
          templateColumns={{ base: "1fr 1fr", md: "repeat(4 , 1fr)" }}
          gap={{ base: "1.5rem", md: "2rem" }}
        >
          <HStack border="1px solid black" p="10px 15px" borderRadius="16px">
            <FaCircleCheck />
            <Text>Project Portofolio Showcase</Text>
          </HStack>
          <HStack border="1px solid black" p="10px 15px" borderRadius="18px">
            <FaCircleCheck />
            <Text>Service Offerings Overview</Text>
          </HStack>
          <HStack border="1px solid black" p="10px 15px" borderRadius="18px">
            <FaCircleCheck />
            <Text>Client Testimonial Section</Text>
          </HStack>
          <HStack border="1px solid black" p="10px 15px" borderRadius="18px">
            <FaCircleCheck />
            <Text>Contact & Inquiry Form</Text>
          </HStack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Achievment;
