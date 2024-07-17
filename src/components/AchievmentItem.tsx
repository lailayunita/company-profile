import { Flex, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

interface AchievmentItem {
  num: string;
  text: string;
}
const AchievmentItem: FC<AchievmentItem> = ({ num, text }) => {
  return (
    <>
      <Flex direction="column" textAlign={{ base: "center", md: "center" }}>
        <Text color="#f55E41" fontSize="3xl" fontWeight="bold">
          {num}
        </Text>
        <Text>{text}</Text>
      </Flex>
    </>
  );
};

export default AchievmentItem;
