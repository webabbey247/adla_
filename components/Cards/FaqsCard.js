import styles from "@/styles/faqs.module.css";
import FaqsAccordion from "../Faqs/FaqsAccordion";
const FaqsCard = () => {
  return (
    <div className={styles.faqs_accordion_section}>
      <div className="container-fluid nav-padding">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={styles.faqs_accordion_ltr}>
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                  <div className={styles.faqs_accordion_ltr_text}>
                    <span className={styles.faqs_header_badge}>
                      Frequently Asked Questions
                    </span>
                    <h4>Got questions? find answers here</h4>
                    {/* <p>
                Choose Adla Global Business Solutions for a reliable
                procurement and export partner. Our industry knowledge,
                sourcing, logistics, and focus on customers ensure your
                success. Count on us for desired results.
              </p> */}
                  </div>

                  <div className={styles.faqs_accordion_ltr_container}>
                    <FaqsAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqsCard;
