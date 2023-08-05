import styles from "./page.module.css";
import { HeroBanner, TestimonialSlider } from "@/components";
import { servicesList } from "@/utils/config";

export default function Home() {
  return (
    <section className="banner-container w-100 h-100 position-relative">
      <div className="position-relative h-100">
        <HeroBanner />
        <div className={styles.banner_divider} />
        <div className={styles.home_about_section}>
          <div className="container-fluid nav_padding">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className={styles.home_about_section_ltr}>
                  <h4>
                    Adla Global Business Solutions, a leading procurement and
                    exports specialist company.
                  </h4>
                  <p>
                    Our goal is to deliver consistent absolute returns for our
                    investors irrespective of the market environment. Rigorous
                    analysis, disciplined risk management, and a relentless
                    pursuit of excellence underpin Adla’s reputation as a market
                    leader.
                  </p>

                  <p>
                    Our enduring client relationships are built on trust,
                    integrity, and high-performing investment strategies.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className={styles.home_about_section_rtl}>
                  <div className={styles.home_about_section_rtl_img} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.home_services_section}>
          <div className="container-fluid nav_padding">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
                <div className={styles.home_services_text_container}>
                  <h4>Our Difference</h4>
                  <p>
                    A diversity of opinion, expertise, and experience are the
                    cornerstones of our investment process while analytical
                    precision, ethical discipline, and responsible thinking
                    drive its implementation.
                  </p>
                </div>
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12">
                <div
                  className={`position-relative ${styles.home_services_grid_container}`}
                >
                  <div className={`row ${styles.active_liner} no-gutters`}>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div
                        className={`${styles.home_services_ltr} position-relative`}
                      >
                        <div className={styles.home_services_ltr_img}>
                          <span />
                          <div
                            className={`position-relative ${styles.home_services_ltr_text}`}
                          >
                            <p>
                              Our enduring client relationships are built on
                              trust, integrity, and high-performing investment
                              strategies.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`${styles.home_services_ltr_bottom} d-flex flex-column justify-content-lg-end justify-content-md-center align-items-lg-end align-items-md-center`}
                      >
                        <h4>Experience</h4>
                        <p>
                          Approaching four decades of analysing cyclical and
                          secular market shifts has instilled resilience and
                          flexibility into our investment and risk management
                          processes.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div
                        className={`${styles.home_services_rlt_text} d-flex flex-column justify-content-lg-start align-items-lg-start`}
                      >
                        <h4>Sustainability</h4>
                        <p>
                          Adla’s longevity creates a natural synergy with
                          sustainable investing practices. To build on our
                          long-term success, we have dedicated resources working
                          to ensure that our portfolios are conscious of
                          environmental, social, and governance (ESG) factors,
                          and all of the opportunities that creates.
                        </p>
                      </div>

                      <div
                        className={`${styles.home_services_rlt_text} d-flex flex-column justify-content-lg-start align-items-lg-start`}
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
        {/* <div className={`position-relative ${styles.home_services_section_v}`}>
          <div className="container-fluid nav-padding">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
                <div className={styles.home_services_section_v_title}>
                  <h4>Guiding principles and values</h4>
                  <p>
                    The environment in which our people work has a direct and
                    meaningful impact on our ability to serve clients. Our
                    culture is founded on the following principles
                  </p>
                </div>
              </div>
              <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                <div className={styles.home_services_children_container}>
                  <div className="row">
                    {servicesList.map((_data, index) => {
                      return (
                        <div
                          className="col-lg-6 col-md-12 col-sm-12"
                          key={index}
                        >
                          <div
                            className={`d-flex flex-row ${styles.home_services_child} ${_data.bgClass}`}
                          >
                            <span className={_data.iconClass} />
                            <div
                              className={`d-flex flex-column align-items-start justify-content-start ${styles.home_services_child_text}`}
                            >
                              <h4>{_data.name}</h4>
                              <p>
                              {_data.summary}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className={styles.home_section_testimonials}>
          <div className="container-fluid nav-padding">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                <TestimonialSlider />
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.home_services_section}>
          <div className="container-fluid nav_padding">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
                <div className={styles.home_services_text_container}>
                  <h4>Our Services</h4>
                  <p>
                    Lorem iosum dolor sit amet. consectetur adiviscina elit. sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                    Lorem iosum dolor sit amet. consectetur adiviscina elit. sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12">
                <div
                  className={`position-relative ${styles.home_services_grid_container}`}
                >
                  <div className={`row ${styles.active_liner} no-gutters`}>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div
                        className={`${styles.home_services_ltr} position-relative`}
                      >
                        <div className={styles.home_services_ltr_img}>
                          <span />
                          <div
                            className={`position-relative ${styles.home_services_ltr_text}`}
                          >
                            <p>
                              Adla Global is passionate about sustainability and
                              ethical sourcing. We actively collaborate with
                              suppliers who adhere to sustainable practices and
                              prioritize environmental stewardship.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`${styles.home_services_ltr_bottom} d-flex  flex-column justify-content-end align-items-end`}
                      >
                        <h4 className="pb-lg-3">Procurement Excellence</h4>
                        <p>
                          At Adla Global, we excel in procurement by leveraging
                          our in-depth knowledge of the agricultural and food
                          industries. Our experienced team meticulously
                          identifies and selects high-quality products that meet
                          your specific requirements.
                        </p>
                      </div>

                      <div
                        className={`${styles.home_services_ltr_bottom} d-flex  flex-column justify-content-end align-items-end`}
                      >
                        <h4 className="pb-lg-3">Agricultural Expertise</h4>
                        <p>
                          Our specialization in agricultural products sets us
                          apart. We have established strong relationships with
                          trusted farmers, cooperatives, and suppliers across
                          various regions. From grains, pulses, and oilseeds to
                          fruits, vegetables, and spices, we source the finest
                          agricultural commodities to cater to the diverse needs
                          of our clients.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div
                        className={`${styles.home_services_rlt_text} d-flex flex-column justify-content-start align-items-start`}
                      >
                        <h4 className="pb-lg-3">Food and Non-Food Items</h4>
                        <p>
                          Adla Global understands the demands of both the food
                          and non-food industries. Whether you require raw
                          materials for food manufacturing or non-food items for
                          distribution, we have you covered. Our extensive
                          product portfolio encompasses a wide range of goods,
                          including ingredients, packaging materials, household
                          products, personal care items, and more.
                        </p>
                      </div>

                      <div
                        className={`${styles.home_services_rlt_text} d-flex flex-column justify-content-start align-items-start`}
                      >
                        <h4 className="pb-lg-3">Seamless Export Solutions</h4>
                        <p>
                          We specialize in facilitating seamless exports to
                          Europe and North America. Our dedicated team ensures
                          compliance with international regulations. We ensure
                          hassle-free experience during logistic processes which
                          includes documentation, customs clearance etc
                        </p>
                      </div>

                      <div
                        className={`${styles.home_services_rlt_text} d-flex flex-column justify-content-start align-items-start`}
                      >
                        <h4 className="pb-lg-3">Collaborative Partnerships</h4>
                        <p>
                          Adla Global is passionate about sustainability and
                          ethical sourcing. We actively collaborate with
                          suppliers who adhere to sustainable practices and
                          prioritize environmental stewardship. By partnering
                          with us, you can be confident that your procurement
                          aligns with your sustainability goals and contributes
                          to a greener future.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
