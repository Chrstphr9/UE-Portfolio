import LightMode from "@/components/LightMode";
import Header from "@/components/common/Header";
import AboutHero from "@/components/about/AboutHero";
import AboutMain from "@/components/personal-portfolio/AboutMain";
import Experience from "@/components/about/Experience";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Uchenna Okpagu – Certified AI Scientist & Technology Leader",
};

const Home = () => {
  return (
    <LightMode>
      <Header />
      <main>
        <AboutHero />
        <AboutMain />
        <Experience />
      </main>
      <Footer />
    </LightMode>
  );
};

export default Home;
