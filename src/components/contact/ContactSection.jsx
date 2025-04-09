'use client'
import React, { useState } from "react";
import Link from "next/link";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    "contact-name": "",
    "contact-email": "",
    "contact-subject": "",
    contactmessage: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://formspree.io/f/xwplrvbp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form on success
        setFormData({
          "contact-name": "",
          "contact-email": "",
          "contact-subject": "",
          contactmessage: "",
        });
        // Open the modal
        setIsModalOpen(true);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-area inner-hero-area section-padding-top-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="inner-hero__content text-center">
              <h1
                className="hero-title split-text left text-initial m-0"
                data-delay="1"
              >
                Let's
                <br />
                Work Together
              </h1>
            </div>
          </div>
        </div>
        <div className="row section-mini-padding-top">
          <div className="col-12">
            <div className="contact__wrapper">
              <div className="row g-4 g-xl-5">
                <div className="col-12 col-lg-5">
                  <div className="contact__info">
                    <h3 className="title">
                      Contact<br /> information
                    </h3>
                    <p className="sub-title">stay up to date</p>
                    <div className="digital-contacts">
                      <ul>
                        <li>
                          <Link
                            href="mailto:admincontact@gmail.com"
                            className="email"
                          >
                            hello@Uchenna Okpagu.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <p className="sub-title">address</p>
                    <div className="address">
                      <p>Lagos, Nigeria.
                      </p>
                    </div>

                    <div className="social-links">
                      <ul>
                        <li>
                          <Link href="https://instagram.com/uchokpagu">Instagram</Link>
                        </li>
                        <li>
                          <Link href="https://x.com/Uchenna Okpagu">twitter</Link>
                        </li>
                        <li>
                          <Link href="https://www.linkedin.com/in/uokpagu/">linkedin</Link>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="contact__form-wrapper">
                    <form
                      action="https://formspree.io/f/xwplrvbp"
                      className="contact__form"
                      method="POST"
                      onSubmit={handleSubmit}
                    >
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div className="input-group">
                            <input
                              type="text"
                              id="contact-name"
                              name="contact-name"
                              placeholder="name"
                              value={formData["contact-name"]}
                              onChange={handleInputChange}
                              required
                            />
                            <label htmlFor="contact-name">name</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group">
                            <input
                              type="text"
                              id="contact-email"
                              name="contact-email"
                              placeholder="email"
                              value={formData["contact-email"]}
                              onChange={handleInputChange}
                              required
                            />
                            <label htmlFor="contact-email">email</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-group">
                            <input
                              type="text"
                              id="contact-subject"
                              name="contact-subject"
                              placeholder="subject"
                              value={formData["contact-subject"]}
                              onChange={handleInputChange}
                              required
                            />
                            <label htmlFor="contact-subject">subject</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-group">
                            <textarea
                              id="contact-message"
                              name="contactmessage"
                              placeholder="message"
                              rows="5"
                              cols="50"
                              value={formData.contactmessage}
                              onChange={handleInputChange}
                              required
                            ></textarea>
                            <label htmlFor="contact-message">message</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="common-btn"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <i className="fa-solid fa-arrow-right"></i>
                          </button>
                          {submitError && (
                            <p className="text-danger mt-2">{submitError}</p>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  
    </section>
  );
};

export default ContactSection;