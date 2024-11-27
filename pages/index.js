import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import ImageGrid from "../Components/ImageGrid";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <ImageGrid />
      <Footer />
    </>
  );
}
