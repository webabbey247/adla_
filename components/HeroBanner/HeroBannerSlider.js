"use client";


import styles from "@/styles/homepage.module.css";
import Link from "next/link";
// import Typewriter from "../Typography/Typewriter";
// import { TypeAnimation } from "react-type-animation";

const HeroBannerSlider = () => {
  return (
    <div
      className={`${styles.hero_banner_slide_section} d-flex justify-content-lg-center align-items-lg-center`}
    >
      <div className="container-fluid nav_padding">
        <div className="row ">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={styles.hero_banner_slide_container}>
              {/* <h2> Your Procurement and Export Partner.</h2> */}
              <h2>
                Your leading <br />{" "}
                {/* <TypeAnimation
                  sequence={[
                    "Procurement",
                    1000,
                    "Export",
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  style={{ color: 'var(--adlas-primary-color)' }}
                /> */}
              </h2>
              <h2>specialist company.</h2>
              <p>
                Welcome to Adla Global Business Solutions, a leading procurement
                and exports specialist company. We are dedicated to sourcing a
                wide range of agricultural, food, and non-food items for
                manufacturers and distributors in Europe and North America.
              </p>

              <Link href="/" className={`${styles.custom_btn} me-auto`}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerSlider;
