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
                  Being the savages bowsman, that is, the person who pulled the
                  bow-oar in his boat, Being the savages bowsman, that is, the
                  person who pulled
                </Text>
              </Stack>
            </Box>
            <Box height={"300px"} width={"300px"} bgColor={"white"} p={"50px"}>
              <Stack justify={"center"}>
                <Heading>UI/UX</Heading>
                <Text>
                  Being the savages bowsman, that is, the person who pulled the
                  bow-oar in his boat, Being the savages bowsman, that is, the
                  person who pulled
                </Text>
              </Stack>
            </Box>
            <Box height={"300px"} width={"300px"} bgColor={"white"} p={"50px"}>
              <Stack justify={"center"}>
                <Heading>UI/UX</Heading>
                <Text>
                  Being the savages bowsman, that is, the person who pulled the
                  bow-oar in his boat, Being the savages bowsman, that is, the
                  person who pulled
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
