"use client";
import styles from "@/styles/hero_banner.module.css";
import { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroBanner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const externalImage =
    "https://neveah.com.ng/uploads/hometopslidersection/16294320859.jpg";
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: false,
        // }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <div className={styles.banner_background_overlay} /> */}
          <div className={`${styles.heroContainer_padding} container-fluid`}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-lg-start">
                <h2 className="text-lg-left">
                  Your Procurement and Export Partner.
                </h2>
                <p className="text-lg-left">
                  Welcome to Adla Global Business Solutions, a leading
                  procurement and exports specialist company. We are dedicated
                  to sourcing a wide range of agricultural, food, and non-food
                  items for manufacturers and distributors in Europe and North
                  America.
                </p>

                <a
                  title="Get started"
                  href=""
                  className={`${styles.custom_btn} me-auto`}
                >
                  Get Started
                </a>
              </div>
              {/* <div className="col-lg-6 col-md-6 col-sm-12">
                <div className={styles.banner_background_img}>
                  <span
                    style={{
                      backgroundImage: `url(${externalImage})`,
                    }}
                  />
                </div>
              </div> */}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {/* <div className={styles.banner_background_overlay} /> */}
          <div className={`${styles.heroContainer_padding} container-fluid`}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-lg-start">
                <h2 className="text-lg-left">
                  Your Procurement and Export Partner.
                </h2>
                <p className="text-lg-left">
                  With our expertise in the agricultural sector, you can
                  confidently rely on us for your procurement needs.
                </p>

                <a
                  title="Get started"
                  href=""
                  className={`${styles.custom_btn} me-auto`}
                >
                  Get Started
                </a>
              </div>
              {/* <div className="col-lg-6 col-md-6 col-sm-12">
                <div className={styles.banner_background_img}>
                  <span
                    style={{
                      backgroundImage: `url(${externalImage})`,
                    }}
                  />
                </div>
              </div> */}
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroBanner;
