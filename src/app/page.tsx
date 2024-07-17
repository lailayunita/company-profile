import Achievment from "@/components/Achievment";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Vision from "@/components/Vision";
import HeroSection from "../components/HeroSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Achievment />
      <Vision />
      <Project />
      <Services />
      <Testimonials />
    </>
  );
}
