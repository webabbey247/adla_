// "use client";

import styles from "@/styles/about.module.css";
import { ImQuotesLeft } from "react-icons/im";
import { MainLayout } from "@/components";

export const metadata = {
  title: "About Adla",
  description: "Generated by create next app",
};
const AboutUsPage = () => {
  return (
    <MainLayout>
      <section className="w-100 h-100 position-relative">
        <div className={styles.about_us_banner}>
          <div className="container-fluid nav_padding">
            <div className="row ">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className={styles.contact_us_title}>
                  <h2>About Us</h2>
                  <p>
                    Lorem iosum dolor sit amet. consectetur adiviscina elit. sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                    Lorem iosum dolor sit amet. consectetur adiviscina elit. sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-pattern" />

        <div className={styles.about_us}>
          <div className="container-fluid nav_padding">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <span>Who we are</span>
                <h4>
                Benefit from our industry expertise, dependable sourcing, efficient logistics, and customer-focused approach.
                </h4>
                <p className="pt-lg-2">
                  We work with carefully selected suppliers that meet our
                  quality control standards in order to reduce the possibility
                  of contamination. The elaborate processes that we undertake
                  assure clients of our unwavering commitment to delivering high
                  quality products. Our products can be packed according to the
                  buyers’ custom requirements. Additionally, we deliver all
                  shipments promptly as required. We work with carefully
                  selected suppliers that meet our quality control standards in
                  order to reduce the possibility of contamination.
                </p>
                <p className="py-lg-4">
                  We work with carefully selected suppliers that meet our
                  quality control standards in order to reduce the possibility
                  of contamination. The elaborate processes that we undertake
                  assure clients of our unwavering commitment to delivering high
                  quality products. Our products can be packed according to the
                  buyers’ custom requirements. The elaborate processes that we
                  undertake assure clients of our unwavering commitment to
                  delivering high quality products. Our products can be packed
                  according to the buyers’ custom requirements. Additionally, we
                  deliver all shipments promptly as required.
                </p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className={styles.about_us_rtl_img_01} />
                <div className={styles.about_us_rtl_quote_card}>
                  <ImQuotesLeft size={80} />

                  <p>
                  We offer customized solutions to fulfill your sourcing requirements and make global trade smoother with our vast experience and network.
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.vision_mission_section} position-relative`}>
          <div className="container-fluid nav_padding">
            <div className="row">
              <div
                className={`${styles.vision_mission_content} col-lg-8 offset-lg-2 col-md-12 col-sm-12`}
              >
                <div className={styles.vision_mission_text_container}>
                  <h4>
                    We specialize in sourcing the finest agro commodities, base
                    metal and minor metals.
                  </h4>
                </div>

                <div className={styles.vision_mission_container}>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className={styles.mission_top_wrapper}>
                        <span />
                      </div>

                      <div
                        className={`${styles.mission_bottom_wrapper} d-flex justify-content-center align-items-center flex-column`}
                      >
                        <span className={styles.mission_icon} />
                        <h4>Our Mission</h4>
                        <p>
                          Equal blame belongs to those who fail in their duty
                          through weakness of will which the same as saying.{" "}
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
                          honesty, and collaboration as we provide
                          problem-solving solutions for companies and talents
                          worldwide.
                        </p>
                      </div>

                      <div
                        className={`${styles.core_values_wrapper} d-flex justify-content-center align-items-center flex-column`}
                      >
                        <span className={styles.vision_icon} />
                        <h4>Our Vision</h4>
                        <p>
                          We aspire to become the leading provider and
                          distributor of spices and organic poultry in Africa,
                          both in terms of production and exportation.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div
                        className={styles.mission_vision_placeholder_wrapper}
                      >
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.about_us_services_section} position-relative`}
        >
          <div className="container-fluid nav_padding">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className={styles.about_us_services_top_wrapper}>
                  <h4>
                    Experience industry expertise, reliable sourcing, seamless
                    logistics, and customer-centric approach.
                  </h4>
                  <p>
                    Choose Adla Global Business Solutions for a reliable
                    procurement and export partner. Our industry knowledge,
                    sourcing, logistics, and focus on customers ensure your
                    success. Count on us for desired results.
                  </p>
                </div>

                <div className={styles.about_us_services_bottom_wrapper}>
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className={styles.about_us_services_card}>
                        <span className={styles.one_of_six} />
                        <small>01</small>
                        <h4>Procurement Excellence</h4>
                        <p>
                          At Adla Global, we excel in procurement by leveraging
                          our in-depth knowledge of the agricultural and food
                          industries. Our experienced team meticulously
                          identifies and selects high-quality products that meet
                          your specific requirements.
                        </p>

                        <div className={styles.hover_text_content}>
                          <div className={styles.content}>
                            <div className={styles.inner}>
                              <p>
                                We understand the importance of timely sourcing,
                                competitive pricing, and consistent supply,
                                ensuring you have a reliable source of goods to
                                fuel your business growth.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className={styles.about_us_services_card}>
                        <span className={styles.two_of_six} />
                        <small>02</small>
                        <h4>Agricultural Expertise</h4>
                        <p>
                          Our specialization in agricultural products sets us
                          apart. We have established strong relationships with
                          trusted farmers, cooperatives, and suppliers across
                          various regions.
                        </p>

                        <div className={styles.hover_text_content}>
                          <div className={styles.content}>
                            <div className={styles.inner}>
                              <p>
                                From grains, pulses, and oilseeds to fruits,
                                vegetables, and spices, we source the finest
                                agricultural commodities to cater to the diverse
                                needs of our clients. With our expertise in the
                                agricultural sector, you can confidently rely on
                                us for your procurement needs.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className={styles.about_us_services_card}>
                        <span className={styles.three_of_six} />
                        <small>03</small>
                        <h4>Food and Non-Food Items</h4>
                        <p>
                          Adla Global understands the demands of both the food
                          and non-food industries. Whether you require raw
                          materials for food manufacturing or non-food items for
                          distribution, we have you covered.
                        </p>

                        <div className={styles.hover_text_content}>
                          <div className={styles.content}>
                            <div className={styles.inner}>
                              <p>
                                Our extensive product portfolio encompasses a
                                wide range of goods, including ingredients,
                                packaging materials, household products,
                                personal care items, and more. Our commitment to
                                quality ensures that you receive products that
                                meet the highest standards.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className={styles.about_us_services_card}>
                        <span className={styles.four_of_six} />
                        <small>04</small>
                        <h4>Seamless Export Solutions</h4>
                        <p>
                          We specialize in facilitating seamless exports to
                          Europe and North America. Our dedicated export team
                          ensures compliance with international regulations and
                          manages the logistics process efficiently.
                        </p>

                        <div className={styles.hover_text_content}>
                          <div className={styles.content}>
                            <div className={styles.inner}>
                              <p>
                                We handle documentation, customs clearance, and
                                transportation to guarantee a smooth and
                                hassle-free experience. Trust us to deliver your
                                products to your doorstep, enabling you to focus
                                on your core business activities.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className={styles.about_us_services_card}>
                        <span className={styles.five_of_six} />
                        <small>05</small>
                        <h4>Collaborative Partnerships</h4>
                        <p>
                          At Adla Global, we value long-term partnerships with
                          our clients. We work closely with you to understand
                          your specific procurement needs and develop customized
                          solutions.
                        </p>

                        <div className={styles.hover_text_content}>
                          <div className={styles.content}>
                            <div className={styles.inner}>
                              <p>
                                Our dedicated account managers provide
                                personalized support, ensuring that your
                                requirements are met effectively and
                                efficiently. We are committed to building
                                enduring relationships based on trust,
                                transparency, and mutual success.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className={styles.about_us_services_card}>
                        <span className={styles.six_of_six} />
                        <small>06</small>
                        <h4>Commitment to Sustainability</h4>
                        <p>
                          Adla Global is passionate about sustainability and
                          ethical sourcing. We actively collaborate with
                          suppliers who adhere to sustainable practices and
                          prioritize environmental stewardship.
                        </p>

                        <div className={styles.hover_text_content}>
                          <div className={styles.content}>
                            <div className={styles.inner}>
                              <p>
                                By partnering with us, you can be confident that
                                your procurement aligns with your sustainability
                                goals and contributes to a greener future.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutUsPage;
