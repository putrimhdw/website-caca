import AboutCaca from "@/components/views/home/AboutCaca";
import GalleryCaca from "@/components/views/home/GalleryCaca";
import HeroCaca from "@/components/views/home/HeroCaca";
import InterestCaca from "@/components/views/home/InterestCaca";
import Footer from "@/components/widgets/footer/Footer";
import Navbar from "@/components/widgets/navbar/Navbar";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <HeroCaca />
      <AboutCaca />
      <InterestCaca />
      <GalleryCaca />
      <Footer />
    </Box>
  );
}
