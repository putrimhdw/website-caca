import {
  Box,
  Stack,
  Image,
  Text,
  HStack,
  Link,
  Flex,
  Icon,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { linkRedirection } from "@/utils/linkRedirection";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <Box bgColor={"blue.50"} py={"32px"} px={{ base: "2rem", md: "10%" }}>
      <Stack align={"center"} spacing={"24px"}>
        <Stack align={"center"} spacing={"16px"}>
          <Box>
            <Heading fontSize={"xl"}>putrimhdw</Heading>
          </Box>
          <Text fontSize={"xs"} textAlign={"center"} maxW={"415px"}>
            “we provide tailored software solutions to fuel your success, From
            startups to established enterprises”
          </Text>
        </Stack>

        <SimpleGrid
          width={"100%"}
          justifyContent={"center"}
          display={"flex"}
          flexWrap={"wrap"}
          spacing={"24px"}
          fontSize={"xs"}
        >
          <Link href={"#home"}>Home</Link>
          <Link href={"#about"}>About</Link>
          <Link href={"#interest"}>Interest</Link>
          <Link href={"#gallery"}>Galleries</Link>
        </SimpleGrid>
        <Box width={"100%"} borderTop={"1px"} />
        <Flex
          justify={"space-between"}
          flexDirection={{ base: "column", sm: "row" }}
          width={"100%"}
        >
          <HStack mb={{ base: "20px", sm: 0 }}>
            <Icon
              _hover={{
                color: "blue.500",
                cursor: "pointer",
              }}
              transition={"all 0.05s"}
              as={AiFillLinkedin}
              boxSize={"23px"}
              onClick={() => {
                linkRedirection("https://www.linkedin.com/in/putrimahadewi");
              }}
            />
          </HStack>
          <Text fontSize={"sm"}>
            Copyright © 2024 Putri Mahadewi | All Right Reserved
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Footer;
