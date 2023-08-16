import styles from "@/styles/general.module.css";
import { Fragment } from "react";

const CustomBannerCard = ({ title, description }) => {
  return (
    <Fragment>
      <div className={styles.general_custom_banner}>
        <div className="container-fluid nav_padding">
          <div className="row ">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className={styles.general_custom_title}>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-pattern" /> */}
    </Fragment>
  );
};

export default CustomBannerCard;
