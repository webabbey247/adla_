import styles from "./page.module.css";
import { HeroBanner } from "@/components";

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
                    Lorem iosum dolor sit amet. consectetur adiviscina elit. sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                    Lorem iosum dolor sit amet. consectetur adiviscina elit. sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                    Lorem iosum dolor sit amet. consectetur adiviscina elit. sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>

                  <p>
                    Lorem iosum dolor sit amet. consectetur adiviscina elit. sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                    Lorem iosum dolor sit amet. consectetur adiviscina elit.
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

                      {/* <div className={`${styles.home_services_rlt_text} d-flex flex-column justify-content-start align-items-start`}>
                       <h4 className="pb-lg-3">Community Investment</h4>
                       <p>Belief in the power of education is engrained in Caxton’s DNA. We consider giving someone the opportunity to learn to be one of the greatest investments we can make; it can empower and uplift not only the individual, but also their community. Our success has driven the growth of various educational initiatives, including the Speakers for Schools UK charity.</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
