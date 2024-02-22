import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const InterestCaca = () => {
  return (
    <Box id="interest">
      <Center
        height={{ base: "auto", lg: "100vh" }}
        bgImage={"/assets/img/interest/interest_bg.svg"}
        px={{ base: 10, lg: "10%" }}
        py={"50px"}
        bgColor={"blue.50"}
      >
        <Stack align={"center"} spacing={"100px"}>
          <Heading>My Interest</Heading>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            width={"100%"}
            justifyContent={"center"}
            display={"flex"}
            flexWrap={"wrap"}
            spacing={"5rem"}
          >
            <Box height={"300px"} width={"300px"} bgColor={"white"} p={"50px"}>
              <Stack justify={"center"}>
                <Heading>UI/UX</Heading>
                <Text>
                  I{"'"}m captivated by UI/UX Design. Crafting intuitive
                  interfaces with tools like Figma fuels my passion. I strive to
                  blend aesthetics and functionality to create user-centric
                  products.
                </Text>
              </Stack>
            </Box>
            <Box height={"300px"} width={"300px"} bgColor={"white"} p={"50px"}>
              <Stack justify={"center"}>
                <Heading>Frontend</Heading>
                <Text>
                  I{"'"}m passionate about Frontend Development, aiming to craft
                  engaging web experiences by merging design and functionality
                  for exceptional results.
                </Text>
              </Stack>
            </Box>
            <Box height={"300px"} width={"300px"} bgColor={"white"} p={"50px"}>
              <Stack justify={"center"}>
                <Heading>Mobile</Heading>
                <Text>
                  I{"'"}m passionate about mobile development to create
                  accessible and valuable solutions for users, focusing on user
                  experience and innovation.
                </Text>
              </Stack>
            </Box>
          </SimpleGrid>
        </Stack>
      </Center>
    </Box>
  );
};

export default InterestCaca;
