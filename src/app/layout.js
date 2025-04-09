// global css File
import "./globals.css";

// bootstrap css File
import "bootstrap/dist/css/bootstrap.min.css";

// swiperJS css File
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";

// app scss file
import "@fortawesome/fontawesome-free/css/all.min.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./sass/style.scss";
import "react-modal-video/scss/modal-video.scss";

// Components
import AnimationProvider from "@/components/providers/AnimationProvider";
import BackTopTop from "@/components/BackToTop";

export const metadata = {
  title: "Uchenna Okpagu – Certified AI Scientist & Technology Leader",
  description:
    "Uchenna Okpagu is a seasoned AI Scientist, Technology Leader, and Software Architect with over 20 years of experience in delivering innovative, intelligent solutions.",
  keywords: [
    "Uchenna Okpagu",
    "AI Scientist",
    "Technology Leader",
    "Artificial Intelligence",
    "Software Architect",
    "CTO",
    "Machine Learning",
    "AI Expert",
    "Tech Leadership",
    "Innovation",
    "Software Engineering",
  ],
  authors: [{ name: "Uchenna Okpagu" }],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnimationProvider>{children}</AnimationProvider>
        <BackTopTop smooth top={100} />
      </body>
    </html>
  );
}
