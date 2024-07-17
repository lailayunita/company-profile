import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

interface ImageComponent {
  src: string;
  alt: string;
  height: { base: string; md: string };
}

const ImageComponent: FC<ImageComponent> = ({ src, alt, height }) => {
  return (
    <>
      <Box position="relative" height={height}>
        <Image
          alt={alt}
          src={src}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover",
            borderRadius: "6px",
            // cover, contain, none
          }}
        />
      </Box>
    </>
  );
};

export default ImageComponent;
