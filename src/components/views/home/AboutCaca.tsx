import { Image, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const AboutCaca = () => {
  return (
    <Flex
      id="about"
      px={{ base: 10, md: "10%" }}
      py={{ base: "50px" }}
      bgImage={"/assets/img/about/about_bg.svg"}
      bgPos={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      height={{ base: "auto", lg: "100vh" }}
      justifyContent={{ base: "center", lg: "space-around" }}
      align={"center"}
      flexDirection={{ base: "column-reverse", lg: "row" }}
    >
      <Image src="/assets/img/about/about_image.svg" alt="caca" />
      <Stack pb={{ base: "30px", lg: 0 }} maxW={"450px"} spacing={"30px"}>
        <Heading>About Me</Heading>
        <Text fontSize={"larger"}>
          A, a student majoring in Informatics at Udayana University, is deeply
          interested in UI/UX Design, particularly utilizing Figma as her
          primary tool. Additionally, she is enthusiastic about exploring
          Frontend Development, aiming to enhance her skills in JavaScript for
          web development projects.
        </Text>
      </Stack>
    </Flex>
  );
};

export default AboutCaca;
