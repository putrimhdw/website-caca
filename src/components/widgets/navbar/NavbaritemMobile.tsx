import { scrollToSection } from "@/utils/scroll";
import useGotoSection from "@/utils/useGoToSection";
import { Box, Button, Divider } from "@chakra-ui/react";

type props = {
  children?: React.ReactNode;
  path: string;
};

export default function NavbaritemMobile({ children, path }: props) {
  const [explore] = useGotoSection(path);

  return (
    <Box display={"grid"} placeItems={"center"}>
      <Button
        width={"100vw"}
        my={"5px"}
        variant={"unstyled"}
        color={"black"}
        onClick={() => {
          scrollToSection(explore - 50);
        }}
      >
        {children}
      </Button>
      <Divider />
    </Box>
  );
}
