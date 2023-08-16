"use client";

import styles from "@/styles/layout.module.css";
import Image from "next/image";
import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const pathname = usePathname();
  const [colorChange, setColorchange] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isLoading, isFetching, mobileNumber, emailAddress, companyAddress } =
    useSelector((state) => state.sitemap);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    });
  }, []);

  return (
    <header className="positon-absolute py-0">
      <nav
        className={
          isMobile
            ? `navbar navbar-expand-lg ${styles.bg_body_secondary} py-0`
            : colorChange
            ? `navbar navbar-expand-lg ${styles.bg_body_theme} py-0`
            : `navbar navbar-expand-lg ${styles.bg_body_transparent} py-0`
        }
      >
        <div className={`container-fluid nav_padding ${styles.is_mobile}`}>
          <Link className="navbar-brand py-0" href="/" passHref>
            <Image
              src="/static/logo.png"
              width={100}
              height={80}
              alt="Adla Logo"
            />
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mt-lg-2">
              <li className={styles.nav_menu_item}>
                <Link
                  className={
                    pathname === "/"
                      ? `nav-link ${styles.nav_menu_link} ${styles.active}`
                      : `nav-link ${styles.nav_menu_link}`
                  }
                  passHref
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className={styles.nav_menu_item}>
                <Link
                  className={
                    pathname === "/about"
                      ? `nav-link ${styles.nav_menu_link} ${styles.active}`
                      : `nav-link ${styles.nav_menu_link}`
                  }
                  passHref
                  href="/about"
                >
                  About Adla
                </Link>
              </li>

              <li className={styles.nav_menu_item}>
                <Link
                  className={
                    pathname === "/faqs"
                      ? `nav-link ${styles.nav_menu_link} ${styles.active}`
                      : `nav-link ${styles.nav_menu_link}`
                  }
                  passHref
                  href="/faqs"
                >
                  FAQs
                </Link>
              </li>

              <li className={styles.nav_menu_item}>
                <Link
                  className={
                    pathname === "/contact"
                      ? `nav-link ${styles.nav_menu_link} ${styles.active}`
                      : `nav-link ${styles.nav_menu_link}`
                  }
                  passHref
                  href="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {!isMobile && (
            <div className="ms-auto d-flex flex-lg-row">
              <div className={styles.whatsapp_call_action}>
                {isLoading || isFetching ? (
                  <div className="d-flex justify-content-center align-items-center align-content-center mr-lg-4">
                    <span
                      className="spinner-border text-light spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />
                  </div>
                ) : (
                  <a
                    href={`https://api.whatsapp.com/send?phone=${mobileNumber}`}
                    className="text-white mr-lg-4"
                  >
                    <FaWhatsapp fontSize={22} />
                    {mobileNumber}
                  </a>
                )}
              </div>

              <Link
                href="/get-quote"
                className={`${styles.contact_us_button}`}
                passHref
              >
                Get Quote
              </Link>
              <div
                className={`${styles.country_language} d-flex align-items-lg-center`}
              >
                <div className={styles.country_language_flag}>
                  <span />
                </div>
                <p>NG</p>
              </div>

              {/* <a
                href="https://api.whatsapp.com/send?phone=2349010003247"
                className="text-white mr-lg-4"
              >
                09132574022
              </a> */}
            </div>
          )}

          <div className="ms-lg-3 d-lg-none d-md-block d-sm-block">
            <button
              className={
                isMobile
                  ? `${styles.is_mobile_burger_menu} ${styles.is_mobile_burger_menu_open}`
                  : `${styles.is_mobile_burger_menu}`
              }
              onClick={() => setIsMobile(!isMobile)}
            >
              {colorChange ? (
                <span
                  className={`${styles.is_mobile_burger_icon} ${styles.is_mobile_burger_icon_theme}`}
                ></span>
              ) : (
                <span className={styles.is_mobile_burger_icon}></span>
              )}
            </button>
          </div>
        </div>

        {isMobile && (
          <div className={styles.responsive_mobile_nav}>
            <div className="d-flex flex-column align-items-center">
              <Link
                href="/"
                className={styles.responsive_nav_link}
                passHref
                onClick={() => setIsMobile(!isMobile)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={styles.responsive_nav_link}
                passHref
                onClick={() => setIsMobile(!isMobile)}
              >
                About Adla
              </Link>
              <Link
                href="/contact"
                className={styles.responsive_nav_link}
                passHref
                onClick={() => setIsMobile(!isMobile)}
              >
                Contact Us
              </Link>
              <Link
                onClick={() => setIsMobile(!isMobile)}
                href="/get-quote"
                className={styles.responsive_nav_link_btn}
                passHref
              >
                Get Quote
              </Link>

              {isLoading || isFetching ? (
                <div className="d-flex justify-content-center align-items-center align-content-center">
                  <span
                    className="spinner-border text-light spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                </div>
              ) : (
                <Fragment>
                  <div className={styles.responsive_nav_info}>
                    <aside>Company Address</aside>
                    <p>{companyAddress}</p>
                  </div>

                  <div className={styles.responsive_nav_info}>
                    <aside>General Enquires </aside>
                    <p>Email: {emailAddress}</p>
                    <p>Phone: {mobileNumber}</p>
                  </div>
                </Fragment>
              )}

              <div className={styles.responsive_nav_info}>
                <aside>Operation Hours </aside>
                <p>Mon-Satday: 09.00 to 07.00 (Sunday: Closed)</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
