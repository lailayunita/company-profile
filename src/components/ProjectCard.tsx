import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { MdArrowOutward } from "react-icons/md";
import ImageComponent from "./ImageComponent";
import Link from "next/link";

interface ProjectCard {
  image: string;
  title: string;
  place: string;
  alt: string;
}

const ProjectsCard: FC<ProjectCard> = ({ image, title, place, alt }) => {
  return (
    <>
      <Box display="flex" flexDirection="column" gap={2}>
        <ImageComponent
          src={image}
          alt={alt}
          height={{ base: "200px", md: "300px" }}
        />
        <Flex justifyContent="space-between" align="center" pt={2}>
          <Flex direction="column" gap={1}>
            <Text fontSize="lg" fontWeight="bold">
              {title}
            </Text>
            <Text>{place}</Text>
          </Flex>

          <Box
            bg="#e9e9e9"
            color="#f55e41"
            borderRadius="100px"
            p={2}
            _hover={{ bg: "#d0d0d0" }}
          >
            <MdArrowOutward size="24px" />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ProjectsCard;
