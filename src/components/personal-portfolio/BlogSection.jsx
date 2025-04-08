import React from "react";
import blogData from "@/constant/personal-portfolio/blog-data";
import BlogItem from "@/components/personal-portfolio/BlogItem";

const BlogSection = () => {
  return (
    <section className="blog-area section-padding-top-bottom">
      <div className="container">
        <div className="row section-mini-padding-bottom justify-content-center">
          <div className="col-12">
            <div className="blog__header section__header">
              <h2 className="section__title split-text right text-initial">
                {blogData?.sectionTitle}
              </h2>
            </div>
          </div>
        </div>
        <div className="row blog__items overflow-hidden">
          {blogData?.blogs?.map((blog) => (
            <BlogItem key={blog?.id} blog={blog} />
          ))}
           <a
                href='/blog'
                className="common-btn common-btn--color-reverse section-mini-margin-top"
                style={{ 
                  width: 'fit-content', 
                  padding: '0.5rem 1rem', 
                  textAlign: 'center', 
                  display: 'inline-block',
                  fontSize: '1.5rem'
                }}
              >
                More Blogs
              </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
