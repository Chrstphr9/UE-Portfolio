import Link from "next/link";
import ReactOffcanvas from "react-bootstrap/Offcanvas";
import MobileMenu from "@/components/mobile-menus/MobileMenu";
import Accordion from "react-bootstrap/Accordion";
import { IoIosArrowDown } from "react-icons/io";
import OffcanvasSocial from "../constant/OffcanvasSocial";

const Offcanvas = ({ menus, handleClose, show, className = "", theme }) => {
  return (
    <>
      <ReactOffcanvas
        show={show}
        placement="end"
        onHide={handleClose}
        className={`${theme === "dark" ? "bg-eerie-black text-white" : ""}`}
      >
        <ReactOffcanvas.Header>
          <ReactOffcanvas.Title as="h4" className="text-white">Uchenna</ReactOffcanvas.Title>
          <button
            onClick={handleClose}
            type="button"
            className="btn-close bg-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className={`bi bi-x-lg ${
                theme === "dark" ? "text-white border-white" : ""
              }`}
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"></path>
            </svg>
          </button>
        </ReactOffcanvas.Header>
        <ReactOffcanvas.Body>
          <div
            className={`mobile-menu  w-100 ${
              theme === "dark" ? "fluid" : ""
            } mean-container ${className}`}
          >
            <div className="mean-bar">
              <Accordion as="nav" bsPrefix=" " className="mean-nav">
                {menus.map((menu, index) => (
                  <Accordion.Item as="ul" key={menu?.id} eventKey={menu?.id}>
                    {menu?.subMenu && menu?.subMenu.length > 0 ? (
                      <>
                        <Accordion.Header as="li">
                          <MobileMenu name={menu?.name} />
                          <IoIosArrowDown size={20} />
                        </Accordion.Header>
                        <Accordion.Body as="ul">
                          {menu?.subMenu?.length > 0 && (
                            <ul>
                              {menu.subMenu.map((subMenuItem) => (
                                <li key={subMenuItem?.id}>
                                  <MobileMenu
                                    className={
                                      theme === "dark"
                                        ? ""
                                        : "color-eerie-black"
                                    }
                                    link={subMenuItem?.link}
                                    name={subMenuItem?.name}
                                  />
                                </li>
                              ))}
                            </ul>
                          )}
                        </Accordion.Body>
                      </>
                    ) : (
                      <li>
                        <MobileMenu link={menu?.link} name={menu?.name} />
                      </li>
                    )}
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="offcanvas-info">
            <div className="about-info">
              <p className="text-white">
              I’m Uchenna Okpagu, a seasoned AI Engineer, Technology Leader, and Cloud Architect with over 20 years of experience in software development, AI transformation, and enterprise technology solutions.
              </p>
            </div>
            <div className="btn-wrapper">
              <Link
                className={`common-btn ${
                  theme === "dark" ? "bg-lime text-black" : ""
                }`}
                href="/contact"
              >
                Let's Connect!
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="social-share">
              <h5 className="text-white">Contact Me</h5>
              <ul>
                <OffcanvasSocial
                  link="https://instagram.com/uchokpagu"
                  socialType="twitter"
                  className={theme === "dark" ? "text-black bg-lime" : ""}
                />
                <OffcanvasSocial
                  link="https://instagram.com/uchokpagu"
                  socialType="instagram"
                  className={theme === "dark" ? "text-black bg-lime" : ""}
                />
                <OffcanvasSocial
                  link="https://www.linkedin.com/in/uokpagu/"
                  socialType="linkedin"
                  className={theme === "dark" ? "text-black bg-lime" : ""}
                />
              </ul>
            </div>
          </div>
        </ReactOffcanvas.Body>
      </ReactOffcanvas>
    </>
  );
};

export default Offcanvas;
