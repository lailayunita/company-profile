import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

interface NavItem {
  menu: string;
  href: string;
}

const NavItem: FC<NavItem> = ({ menu, href }) => {
  return (
    <>
      <Box
        py={1}
        px={2}
        borderRadius={4}
        _hover={{ bg: "#f45e41", color: "white" }}
      >
        <Link href={href}>{menu}</Link>
      </Box>
    </>
  );
};

export default NavItem;
