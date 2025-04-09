import LightMode from "@/components/LightMode";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ContactSection from "@/components/contact/ContactSection";

export const metadata = {
  title: "Uchenna Okpagu – Certified AI Scientist & Technology Leader",
};

const Home = () => {
  return (
    <LightMode>
      <Header/>
      <main>
        <ContactSection/>
      </main>
      <Footer/>
    </LightMode>
  );
};

export default Home;
