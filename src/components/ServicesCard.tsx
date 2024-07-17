import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import { MdArrowOutward } from "react-icons/md";
import ImageComponent from "./ImageComponent";

interface ServicesCard {
  image: string;
  title: string;
}

const ServicesCard: FC<ServicesCard> = ({ image, title }) => {
  return (
    <>
      <Box
        height={{ base: "200px", md: "300px" }}
        bgImage={`url(${image})`}
        bgSize="cover"
        bgPosition="center"
        borderRadius="md"
        overflow="hidden"
        position="relative"
        color="white"
      >
        <Flex
          direction="column"
          justify="flex-end"
          h="100%"
          p="6"
          _hover={{ bg: "rgba(0, 0, 0, 0.5)" }}
        >
          <Text fontWeight="bold" fontSize="xl">
            {title}
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default ServicesCard;
