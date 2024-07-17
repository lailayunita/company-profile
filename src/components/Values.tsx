import { Avatar, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

interface Values {
  value: string;
  desc: string;
  icon: string;
}

const Values: FC<Values> = ({ value, desc, icon }) => {
  return (
    <>
      <Card>
        <CardBody>
          <Flex direction="column" gap={2}>
            <Image src={icon} width="50px" />
            <Text color="#f55e41" fontWeight="semibold">
              {value}
            </Text>
            <Text>{desc}</Text>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default Values;
