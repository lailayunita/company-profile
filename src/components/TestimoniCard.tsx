import { Avatar, Card, CardBody, Text } from "@chakra-ui/react";
import { FC } from "react";

interface TestimoniCard {
  name: string;
  profilepic: string;
  testimoni: string;
}
const TestimoniCard: FC<TestimoniCard> = ({ name, profilepic, testimoni }) => {
  return (
    <>
      <Card bg="#f5f5f5">
        <CardBody display="flex" flexDirection="column" gap={2}>
          <Avatar src={profilepic} name="profile picture" />
          <Text fontWeight="semibold">{name}</Text>
          <Text>{testimoni}</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default TestimoniCard;
