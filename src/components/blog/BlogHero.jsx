import Link from "next/link";
import React from "react";

const BlogHero = () => {
  return (
    <section className="inner-hero-area section-padding-top-bottom text-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="inner-hero__content">
              <h1
                className="hero-title split-text left text-initial"
                data-delay="0.1"
              >
                Blogs
              </h1>
              <Link
                href="/contact"
                className="common-btn common-btn--color-reverse"
              >
                Let's Connect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
