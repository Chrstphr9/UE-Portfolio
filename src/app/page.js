import LightMode from "@/components/LightMode";
import AboutMain from "@/components/personal-portfolio/AboutMain";
import AboutSection from "@/components/personal-portfolio/AboutSection";
import BlogSection from "@/components/personal-portfolio/BlogSection";
import Footer from "@/components/personal-portfolio/Footer";
import Header from "@/components/personal-portfolio/Header";
import HeroSetion from "@/components/personal-portfolio/HeroSetion";
import ImageSection from "@/components/personal-portfolio/ImageSection";
import LinesContainer from "@/components/personal-portfolio/LinesContainer";

import ServiceSection from "@/components/personal-portfolio/ServiceSection";



export default function Home() {
  return (
    <>
      <LightMode>
      <Header />
      <main className="position-relative">
        <LinesContainer />
        <HeroSetion />
        <AboutMain />
        <ServiceSection />
        <ImageSection />
        <AboutSection />
        <BlogSection />
      </main>
      <Footer />
      </LightMode>
    </>
  );
}
