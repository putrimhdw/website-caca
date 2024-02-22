import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  Image,
} from "@chakra-ui/react";
import React from "react";

const GalleryCaca = () => {
  return (
    <Box id="gallery">
      <Center
        height={"auto"}
        bgImage={"/assets/img/gallery/gallery_bg.svg"}
        bgSize={"cover"}
        bgPos={"center"}
        px={{ base: 10, lg: "10%" }}
        py={"50px"}
      >
        <Stack align={"center"} spacing={"50px"}>
          <Heading>Galleries</Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            width={"100%"}
            justifyContent={"center"}
            spacing={"5rem"}
          >
            <Image src={"/assets/img/gallery/photo/1.png"} alt="my gallery" />
            <Image src={"/assets/img/gallery/photo/2.png"} alt="my gallery" />
            <Image src={"/assets/img/gallery/photo/3.png"} alt="my gallery" />
            <Image src={"/assets/img/gallery/photo/4.png"} alt="my gallery" />
            <Image src={"/assets/img/gallery/photo/5.png"} alt="my gallery" />
            <Image src={"/assets/img/gallery/photo/6.png"} alt="my gallery" />
          </SimpleGrid>
        </Stack>
      </Center>
    </Box>
  );
};

export default GalleryCaca;
