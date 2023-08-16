import styles from "@/styles/general.module.css";
import TestimonialSlider from "../Testimonials/TestimonialSlider";

const TestimonialsCard = () => {
  return (
    <div className={styles.testimonials_section}>
      <div className="container-fluid nav-padding">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
