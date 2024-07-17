import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import NavItem from "./NavItem";
import OrangeBtn from "./OrangeBtn";
import { HiMenu } from "react-icons/hi";
import { merriweather } from "@/utils/fonts";
import { BsBuildings } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <Box
        bg="white"
        position="sticky"
        top={0}
        zIndex={3}
        borderBottom="1px solid #f6f6f6"
      >
        <Container
          maxW="7xl"
          display="flex"
          justifyContent="space-between"
          p={4}
          alignItems="center"
        >
          <Box
            css={{ fontFamily: merriweather.style.fontFamily }}
            fontSize="xl"
            fontWeight="semibold"
          >
            <Link href="/">
              <HStack alignItems="center">
                <BsBuildings color="#f55e41" size="28px" />
                <Text>Builders</Text>
              </HStack>
            </Link>
          </Box>
          <Box display={{ base: "none", sm: "none", md: "inline" }}>
            <Flex justifyContent="space-between" gap={6}>
              <NavItem menu="Home" href="/" />
              <NavItem menu="About Us" href="/about" />
              <NavItem menu="Services" href="/services" />
              <NavItem menu="Our Team" href="/teams" />
            </Flex>
          </Box>
          <Box display={{ base: "none", sm: "none", md: "inline" }}>
            <OrangeBtn btnText="Contact Us" />
          </Box>

          <Box display={{ base: "block", sm: "block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HiMenu size={20} />}
                variant="ghost"
                bg="white"
                color="#f55e41"
                border="1px solid #f55e41"
                _expanded={{ bg: "#f55e41", color: "white" }}
                _focus={{ boxShadow: "outline" }}
              />
              <MenuList fontSize="lg">
                <MenuItem as="a" href="/">
                  Home
                </MenuItem>
                <MenuItem as="a" href="/about">
                  About Us
                </MenuItem>
                <MenuItem as="a" href="/services">
                  Services
                </MenuItem>
                <MenuItem as="a" href="/teams">
                  Our Team
                </MenuItem>
                <MenuItem as="a" href="">
                  Contact
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
