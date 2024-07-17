import { Avatar, Card, CardBody, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble, FaLinkedin } from "react-icons/fa6";

interface TeamCard {
  name: string;
  profilepic: string;
}

const TeamCard: FC<TeamCard> = ({ name, profilepic }) => {
  return (
    <>
      <Card>
        <CardBody color="#848483">
          <VStack gap={1}>
            <Avatar src={profilepic} name="profile picture" size="lg" />
            <Text color="black">{name}</Text>
            <Text color="#f55e41">Founder & CEO</Text>
            <Text textAlign="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, neque.
            </Text>
            <HStack pt={2}>
              <Link href="https://x.com/">
                <FaTwitter size="20px" />
              </Link>
              <Link href="https://linkedin.com/">
                <FaLinkedin size="20px" />
              </Link>
              <Link href="https://dribbble.com/">
                <FaDribbble size="20px" />
              </Link>
            </HStack>
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

export default TeamCard;
