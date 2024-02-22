import {
  Box,
  Image,
  Button,
  Flex,
  HStack,
  Collapse,
  Stack,
  Divider,
  useDisclosure,
  Text,
  Heading,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import navigate from "@/utils/navigate";

const Navitem = dynamic(() => import("./Navitem"));
const NavbaritemMobile = dynamic(() => import("./NavbaritemMobile"));

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  const [scrollPosition, setScrollPosition] = useState(0);
  let sticky = scrollPosition == 0;

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box as={"nav"}>
      <Box
        px={{ base: 10, md: "10%" }}
        py={"5"}
        position={"fixed"}
        width={"100%"}
        zIndex={"2"}
        bgColor={sticky ? "transparent" : "white"}
        boxShadow={sticky ? "none" : "0.5px 3px 15px rgb(0 0 0 / 12%)"}
        transition={"all 0.25s"}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Heading fontSize={"xl"}>putrimhdw</Heading>
          <HStack display={{ base: "none", lg: "block" }}>
            <Navitem path="home">Home</Navitem>
            <Navitem path="about">About</Navitem>
            <Navitem path="interest">Interest</Navitem>
            <Navitem path="gallery">Galleries</Navitem>
          </HStack>
          <Button
            display={{ lg: "none" }}
            variant={"unstyled"}
            onClick={onToggle}
          >
            <HamburgerIcon boxSize={"25px"} color={"black"} />
          </Button>
        </Flex>
      </Box>
      <Box
        display={{ lg: "none" }}
        position={"fixed"}
        bgColor={"white"}
        bgSize={"cover"}
        zIndex={"1"}
      >
        <Collapse in={isOpen} animateOpacity>
          <Stack mt={"88px"}>
            <Divider />
            <NavbaritemMobile path="home">Home</NavbaritemMobile>
            <NavbaritemMobile path="about">About</NavbaritemMobile>
            <NavbaritemMobile path="interest">Interest</NavbaritemMobile>
            <NavbaritemMobile path="gallery">Galleries</NavbaritemMobile>
          </Stack>
        </Collapse>
      </Box>
    </Box>
  );
}
