import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

interface PillImage {
  src: string;
}

const PillImage: FC<PillImage> = ({ src }) => {
  return (
    <>
      <Box
        position="relative"
        width={{ base: "72px", sm: "108px", md: "150px" }}
        height={{ base: "24px", sm: "36px", md: "50px" }}
      >
        <Image
          alt="Mountains"
          src={src}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{ borderRadius: "2rem", objectFit: "cover" }}
        />
      </Box>
    </>
  );
};

export default PillImage;
