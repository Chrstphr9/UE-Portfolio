"use client";
import React, { useState } from "react";

const HeroMain = ({  heroContent }) => {
  // const defaultSkillId =
  //   skillsData.find((skill) => skill.isDefault)?.id || skillsData[0].id;
  // const [currentSkill, setCurrentSkill] = useState(defaultSkillId);

  return (
    <div className="hero__main">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero__main-content">
              <div className="hero-thumb reveal zoom-out">
                <img src={heroContent?.maskImage} alt="hero-mask-avatar" />
              </div>
              <div className="hero-content">
                <h1 className="hero-title d-flex flex-column">
                  {heroContent?.themeName?.map((item, index) => (
                    <span
                      key={index}
                      className={item.classes}
                      data-text={item.firstName || item.lastName}
                    >
                      {item.firstName || item.lastName}
                    </span>
                  ))}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
