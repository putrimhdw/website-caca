import { scrollToSection } from "@/utils/scroll";
import useGotoSection from "@/utils/useGoToSection";
import { Button } from "@chakra-ui/react";

type props = {
  children?: React.ReactNode;
  path: string;
};

export default function Navitem({ children, path }: props) {
  const [explore] = useGotoSection(path);

  return (
    <Button
      variant={"nav"}
      fontWeight={"semibold"}
      transition={"color 0.5s"}
      onClick={() => {
        scrollToSection(explore - 90);
      }}
      color={"black"}
      _hover={{
        color: "blue.900",
        _after: {
          transform: "scaleX(1)",
          transformOrigin: "bottom left",
        },
      }}
      _after={{
        content: '""',
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: "2px",
        bottom: 0,
        left: 0,
        bgColor: "blue.900",
        transformOrigin: "bottom right",
        transition: "transform 0.25s ease-out",
      }}
    >
      {children}
    </Button>
  );
}
