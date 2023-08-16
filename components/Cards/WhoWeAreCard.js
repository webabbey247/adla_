import styles from "@/styles/about.module.css";
import { ImQuotesLeft } from "react-icons/im";

const WhoWeAreCard = () => {
  return (
    <div className={styles.about_us}>
      <div className="container-fluid nav_padding">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <span className={styles.about_us_badge}>Who we are</span>
            <h4>
              Benefit from our industry expertise, dependable sourcing,
              efficient logistics, and customer-focused approach.
            </h4>
            <p className="pt-lg-2">
              We work with carefully selected suppliers that meet our quality
              control standards in order to reduce the possibility of
              contamination. The elaborate processes that we undertake assure
              clients of our unwavering commitment to delivering high quality
              products. Our products can be packed according to the buyers’
              custom requirements. Additionally, we deliver all shipments
              promptly as required. We work with carefully selected suppliers
              that meet our quality control standards in order to reduce the
              possibility of contamination.
            </p>
            <p className="py-lg-4">
              We work with carefully selected suppliers that meet our quality
              control standards in order to reduce the possibility of
              contamination. The elaborate processes that we undertake assure
              clients of our unwavering commitment to delivering high quality
              products. Our products can be packed according to the buyers’
              custom requirements.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className={styles.about_us_rtl_img_01} />
          </div>

          {/* <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={styles.about_us_rtl_quote_card}>
              <ImQuotesLeft size={80} />

              <p>
                We offer customized solutions to fulfill your sourcing
                requirements and make global trade smoother with our vast
                experience and network.
              </p>
              <div></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreCard;
