import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import LightMode from "@/components/LightMode";
import ServiceHero from "@/components/service/ServiceHero";
import Testimonial from "@/components/service/Testimonial";

export const metadata = {
  title: "Service || Nicholls - Personal Portfolio/CV NextJS Template",
};

const Home = () => {
  return (
    <LightMode>
      <Header />
      <main>
      <ServiceHero />
      <Testimonial />
      </main>
      <Footer />
    </LightMode>
  );
};

export default Home;
