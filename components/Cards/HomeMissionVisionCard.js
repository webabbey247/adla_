import styles from "@/styles/homepage.module.css";
const HomeMissionVisionCard = () => {
  return (
    <div className={styles.home_mission_vision_section}>
      <div className="container-fluid nav_padding">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
            <div className={styles.home_mission_vision_text_container}>
              <h4>Our Difference</h4>
              <p>
                A diversity of opinion, expertise, and experience are the
                cornerstones of our investment process while analytical
                precision, ethical discipline, and responsible thinking drive
                its implementation.
              </p>
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <div
              className={`position-relative ${styles.home_mission_vision_grid_container}`}
            >
              <div className={`row ${styles.active_liner} no-gutters`}>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div
                    className={`${styles.home_mission_vision_ltr} position-relative`}
                  >
                    <div className={styles.home_mission_vision_ltr_img}>
                      <span />
                      <div
                        className={`position-relative ${styles.home_mission_vision_ltr_text}`}
                      >
                        <p>
                          Our enduring client relationships are built on trust,
                          integrity, and high-performing investment strategies.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles.home_mission_vision_ltr_bottom} d-flex flex-column justify-content-lg-end justify-content-md-center align-items-lg-end align-items-md-center`}
                  >
                    <h4>Experience</h4>
                    <p>
                      Approaching four decades of analysing cyclical and secular
                      market shifts has instilled resilience and flexibility
                      into our investment and risk management processes.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div
                    className={`${styles.home_mission_vision_rlt_text} d-flex flex-column justify-content-lg-start align-items-lg-start`}
                  >
                    <h4>Sustainability</h4>
                    <p>
                      Adla’s longevity creates a natural synergy with
                      sustainable investing practices. To build on our long-term
                      success, we have dedicated resources working to ensure
                      that our portfolios are conscious of environmental,
                      social, and governance (ESG) factors, and all of the
                      opportunities that creates.
                    </p>
                  </div>

                  <div
                    className={`${styles.home_mission_vision_rlt_text} d-flex flex-column justify-content-lg-start align-items-lg-start`}
                  >
                    <h4>Consistency</h4>
                    <p>
                      Our investing expertise is fortified by proven
                      infrastructure and a commitment to industry best
                      practices. That combination promotes the continuous
                      process improvement needed to deliver consistent
                      outperformance.
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

export default HomeMissionVisionCard;
