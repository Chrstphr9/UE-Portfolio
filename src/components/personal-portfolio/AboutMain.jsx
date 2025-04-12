import React from "react";
import Link from "next/link";
import aboutData from "@/constant/personal-portfolio/aboutMain-Data";

const AboutMain = () => {
  return (
    <section className='about-area section-padding-top-bottom bg-ecedde after-shape'>
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="section__header">
              <div className="d-flex align-items-center">
                <h2 className="section__title">
                  {aboutData?.headerInfo?.greeting}
                </h2>
              </div>
              <h2 className="section__title split-text right text-initial">
                {aboutData?.headerInfo?.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-4 align-items-center section-mini-padding-top">
          {/* Left side - Text content */}
          <div className="col-xl-6">
            <div className="about__content">
              {aboutData?.content?.paragraphs.map((paragraph, index) => (
                <p key={index} className="item-popup">
                  {paragraph}
                </p>
              ))}
              <Link href={aboutData?.content?.cta?.href} className="common-btn">
                {aboutData?.content?.cta?.text}
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="col-xl-6 d-none d-xl-block">
            <div className="about__sha p-4 overflow-hidden text-center">
              <img
                src={aboutData?.decorativeImage?.src}
                alt={aboutData?.decorativeImage?.alt}
                // className="img-fluid"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMain;
