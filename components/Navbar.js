"use client";

import styles from "@/styles/layout.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const Navbar = () => {
  const activeSegment = useSelectedLayoutSegment();
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <header className="positon-absolute py-0">
      <nav
        className={
          colorChange
            ? "navbar navbar-expand-lg bg-body-theme py-0"
            : "navbar navbar-expand-lg bg-body-transparent py-0"
        }
      >
        <div className={`container-fluid ${styles.nav_padding}`}>
          <a className="navbar-brand py-0" href="/">
            <Image
              src="/static/logo.png"
              width={100}
              height={80}
              alt="Adla Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
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
                {/* <a className="nav-link" href="/about">
                  About Adla
                </a> */}
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
                {/* <a className="nav-link" href="/contact">
                  Contact Us
                </a> */}
              </li>
            </ul>
          </div>
          <div className="me-auto ms-lg-3">
            <Link href="/get-quote" className={`${styles.contact_us_button}`} passHref>
              Get Quote
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
