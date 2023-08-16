import styles from "@/styles/about.module.css";
import QuotesCard from "./QuotesCard";
const MissionVisionCard = () => {
  return (
    <div className={`${styles.vision_mission_section} position-relative`}>
      <div className="container-fluid nav_padding">
        <div className="row">
          <div
            className={`${styles.vision_mission_content} col-lg-8 offset-lg-2 col-md-12 col-sm-12`}
          >
            <QuotesCard />

            <div className={styles.vision_mission_container}>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className={`${styles.mission_bottom_wrapper} d-flex justify-content-center align-items-center flex-column`}
                  >
                    <span className={styles.mission_icon} />
                    <h4>Our Mission</h4>
                    <p>
                      We aim to provide top-notch agrocommodities and services
                      with transparency. We prioritize improving processes to
                      build trust with stakeholders and deliver value.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className={`${styles.core_values_wrapper} d-flex justify-content-center align-items-center flex-column`}
                  >
                    <span className={styles.values_icon} />
                    <h4>Our Core Values</h4>
                    <p>
                      Our approach involves accountability, responsiveness,
                      honesty, and collaboration as we provide problem-solving
                      solutions for companies worldwide.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className={`${styles.core_values_wrapper} d-flex justify-content-center align-items-center flex-column`}
                  >
                    <span className={styles.vision_icon} />
                    <h4>Our Vision</h4>
                    <p>
                      We aspire to become the leading provider and distributor
                      of spices and organic poultry in Africa, both in terms of
                      production and exportation.
                    </p>
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

export default MissionVisionCard;
