"use client";

import styles from "@/styles/testimonials.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const TestimonialSlider = () => {
  return (
    <div className={styles.testimonials_child_container}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="testimonials-slider"
      >
        <SwiperSlide>
          <div className={styles.testimonials_child}>
            <h4>
              “Adla’s inclusive work environment is designed to help its people
              perform. This approach benefits the individual, the firm, and our
              clients.”
            </h4>
            <p> - Head of Human Resources</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.testimonials_child}>
            <h4>
              “Adla’s inclusive work environment is designed to help its people
              perform. This approach benefits the individual, the firm, and our
              clients.”
            </h4>
            <p> - Head of Human Resources</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
