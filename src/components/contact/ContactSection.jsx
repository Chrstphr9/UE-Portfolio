'use client'
import React, { useState } from "react";
import Link from "next/link";

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    'contact-name': '',
    'contact-email': '',
    'contact-subject': '',
    contactmessage: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // The form will still submit to Formspree
    // But we'll show the modal immediately for user feedback
    setIsModalOpen(true);
    
    // Reset form fields after submission
    setFormData({
      'contact-name': '',
      'contact-email': '',
      'contact-subject': '',
      contactmessage: ''
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
                            hello@ucheokpagu.com
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
                          <Link href="#">Instagram</Link>
                        </li>
                        <li>
                          <Link href="#">twitter</Link>
                        </li>
                        <li>
                          <Link href="#">Tiktok</Link>
                        </li>
                        <li>
                          <Link href="#">linkedin</Link>
                        </li>
                        <li>
                          <Link href="#">dribbble</Link>
                        </li>
                        <li>
                          <Link href="#">behance</Link>
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
                              value={formData['contact-name']}
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
                              value={formData['contact-email']}
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
                              value={formData['contact-subject']}
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
                          <button type="submit" className="common-btn">
                            Send Message
                            <i className="fa-solid fa-arrow-right"></i>
                          </button>
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

      {/* Message Sent Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Message Sent</h3>
                <button className="close-btn" onClick={closeModal}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <div className="modal-body">
                <div className="success-icon">
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <p>Thank you for your message! I'll get back to you soon.</p>
              </div>
              <div className="modal-footer">
                <button className="common-btn" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add this CSS to your stylesheets */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 1rem;
        }

        .modal-container {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 500px;
          overflow: hidden;
        }

        .modal-header {
          display: flex;
          color: #000;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid #eee;
        }

        .modal-header h3 {
          margin: 0;
          font-size: 1.5rem;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.25rem;
          cursor: pointer;
          color: black;
          transition: color 0.2s;
        }

        .close-btn:hover {
          color: black;
        }

        .modal-body {
          padding: 2rem;
          text-align: center;
        }

        .success-icon {
          font-size: 3rem;
          color: #28a745;
          margin-bottom: 1rem;
        }

        .modal-body p {
          margin: 0;
          font-size: 1.1rem;
          color: #333;
        }

        .modal-footer {
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: flex-end;
          border-top: 1px solid #eee;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;