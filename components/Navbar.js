"use client";

import styles from "@/styles/layout.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const Navbar = () => {
  const activeSegment = useSelectedLayoutSegment();
  const [colorChange, setColorchange] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
            ? "navbar navbar-expand-lg bg-body-secondary py-0"
            : colorChange
            ? "navbar navbar-expand-lg bg-body-theme py-0"
            : "navbar navbar-expand-lg bg-body-transparent py-0"
        }
      >
        <div
          className={`container-fluid ${styles.nav_padding} ${styles.is_mobile}`}
        >
          <a className="navbar-brand py-0" href="/">
            <Image
              src="/static/logo.png"
              width={100}
              height={80}
              alt="Adla Logo"
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={
                    activeSegment === "/" ? "nav-link active" : "nav-link"
                  }
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    activeSegment === "/about" ? "nav-link active" : "nav-link"
                  }
                  href="/about"
                >
                  About Adla
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={
                    activeSegment === "/contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="ms-lg-3">
            <Link
              href="/get-quote"
              className={`${styles.contact_us_button}`}
              passHref
            >
              Get Quote
            </Link>
          </div>
          <div className="ms-lg-3 d-lg-none d-md-none d-sm-block">
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
      </nav>
      {isMobile && (
        <div className={styles.mobile_nav_container}>
          <div className="d-flex flex-column align-items-center">
            <Link href="/" passHref>
              hello
            </Link>
            <Link href="/" passHref>
              hello
            </Link>
            <Link href="/" passHref>
              hello
            </Link>
            <Link href="/" passHref>
              hello
            </Link>
            <Link href="/" passHref>
              hello
            </Link>
            <Link href="/" passHref>
              hello
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
