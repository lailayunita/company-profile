import { merriweather } from "@/utils/fonts";
import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  HStack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsBuildings } from "react-icons/bs";
import {
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Box bg="black" color="white" bottom={0}>
        <Container maxW="7xl" py={8}>
          <Grid templateColumns={{ base: "1fr", md: "2fr 1fr 1fr" }} gap={10}>
            <Flex direction="column" justifyContent="space-between" gap={3}>
              <Box
                css={{ fontFamily: merriweather.style.fontFamily }}
                fontSize="xl"
                fontWeight="semibold"
              >
                <Link href="/">
                  <HStack gap={2} alignItems="center">
                    <BsBuildings color="#f55e41" size="28px" />
                    <Text>Builders</Text>
                  </HStack>
                </Link>
              </Box>
              <Text>
                Empowering Your Vision: Turning Dreams into Reality Through
                Collaborative Expertise
              </Text>
              <Flex gap={3}>
                <Box _hover={{ color: "#f55e41" }}>
                  <Link href="https://www.instagram.com/">
                    <FaInstagram size="1.5rem" />
                  </Link>
                </Box>
                <Box _hover={{ color: "#f55e41" }}>
                  <Link href="https://www.x.com/">
                    <FaTwitter size="1.5rem" />
                  </Link>
                </Box>
                <Box _hover={{ color: "#f55e41" }}>
                  <Link href="https://www.linkedin.com/">
                    <FaLinkedin size="1.5rem" />
                  </Link>
                </Box>
              </Flex>
            </Flex>
            <Flex
              direction="column"
              gap={2}
              justifySelf={{ base: "start", md: "end" }}
            >
              <Text fontWeight="semibold">Product</Text>
              <Text>How it Works</Text>
              <Text>Services</Text>
              <Text>Blogs</Text>
              <Text>Press Info</Text>
            </Flex>
            <Flex
              direction="column"
              gap={2}
              justifySelf={{ base: "start", md: "end" }}
            >
              <Text fontWeight="semibold">Company</Text>
              <Text>About Us</Text>
              <Text>FAQs</Text>
              <Text>Customer Stories</Text>
              <Text>Contact</Text>
            </Flex>
          </Grid>
        </Container>
        <Divider />
        <Container maxW="7xl">
          <Flex alignItems="center" gap={2} py={6}>
            <Box>
              <FaRegCopyright />
            </Box>
            <Text>All rights reserved by wolfpixel</Text>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
