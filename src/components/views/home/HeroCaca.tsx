import {
  Box,
  Button,
  Image,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const HeroCaca = () => {
  return (
    <Flex
    id="home"
      px={{ base: 10, md: "10%" }}
      pb={{ base: "50px", md: 0 }}
      pt={{ base: "100px", md: 0 }}
      bgColor={"blue.50"}
      height={{ base: "auto", md: "40rem", lg: "100vh" }}
      justifyContent={{ base: "center", lg: "space-between" }}
      align={"center"}
      flexDirection={{ base: "column-reverse", md: "row" }}
    >
      <Stack
        spacing={"30px"}
        align={{ base: "center", md: "start" }}
        pt={{ base: "50px", lg: 0 }}
      >
        <Stack spacing={"5px"}>
          <Heading
            size={{ base: "2xl", lg: "4xl" }}
            textAlign={{ base: "center", md: "left" }}
            maxWidth={"580px"}
          >
            Hello, my name is Putri Mahadewi!
          </Heading>
          <Text
            fontSize={{ base: "larger", lg: "x-large" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Walk in the dark, to serve the light ✨
          </Text>
        </Stack>
        <Box>
          <Button colorScheme={"blue"} bgColor={"blue.900"}>
            See About Me
          </Button>
        </Box>
      </Stack>
      <Image
        height={{ base: "300px", lg: "auto" }}
        src="/assets/img/hero/hero_image.svg"
        alt="Caca"
      />
    </Flex>
  );
};

export default HeroCaca;
