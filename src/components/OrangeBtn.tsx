import { Button, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { FaArrowRight } from "react-icons/fa6";

interface OrangeBtn {
  btnText: string;
}

const OrangeBtn: FC<OrangeBtn> = ({ btnText }) => {
  return (
    <>
      <Button
        bg="white"
        color="#f55e41"
        border="1px solid #f55e41"
        borderRadius="18px"
        fontSize="sm"
        _hover={{ color: "white", bg: "#f55e41" }}
      >
        <Flex gap={2} alignItems="center">
          {btnText}
          <FaArrowRight />
        </Flex>
      </Button>
    </>
  );
};

export default OrangeBtn;
