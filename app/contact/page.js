import { Fragment } from "react";
import styles from "@/styles/contactus.module.css";
import { FiMapPin, FiMail, FiClock } from "react-icons/fi";
import { ContactUsForm } from "@/components/Forms";
import Link from "next/link";

export const metadata = {
  title: "Contact Us",
  description: "Generated by create next app",
};

const ContactUsPage = () => {
  return (
    <Fragment>
      <section className="w-100 h-100 position-relative">
        <div className={styles.contact_us_banner}>
          <div className="container-fluid nav_padding">
            <div className="row ">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className={styles.contact_us_title}>
                  <h2>Contact Us</h2>
                  <p>
                    We’d love to learn more about how we can partner with your
                    organization. Tell us a bit about yourself,and we’ll get in
                    touch as soon as we can.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.contact_us_form_section}`}>
        <div className="container-fluid nav_padding">
          <div className={styles.contact_us_form_row}>
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <ContactUsForm />
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="d-flex flex-column w-100">
                      <div className={styles.contact_text_info_holder}>
                        <h4>Reach Our Expert Team</h4>
                        <p>
                          Send a message through given form, If your enquiry is
                          time sensitive please use below contact details or the <Link className={styles.get_quote_link} href="/get-quote"
                          >get quote form</Link>.
                        </p>
                      </div>

                      <div
                        className={`${styles.contact_info_holder} d-flex flex-lg-row justify-content-start align-self-start w-100`}
                      >
                        <div
                          className={`${styles.contact_icon_holder} rounded-circle`}
                        >
                          <FiMapPin color="var(--adlas-color-white)" />
                        </div>
                        <div className="">
                          <aside>Company Address</aside>
                          <p>8 Okunade str, Charity bus stop, Oshodi Lagos</p>
                        </div>
                      </div>

                      <div
                        className={`${styles.contact_info_holder} d-flex flex-lg-row justify-content-start align-self-start w-100`}
                      >
                        <div
                          className={`${styles.contact_icon_holder} rounded-circle`}
                        >
                          <FiMail color="var(--adlas-color-white)" />
                        </div>
                        <div className="">
                          <aside>General Enquires </aside>
                          <p>Email: info@addressmail.com</p>
                        </div>
                      </div>

                      <div
                        className={`${styles.contact_info_holder} d-flex flex-lg-row justify-content-start align-self-start w-100`}
                      >
                        <div
                          className={`${styles.contact_icon_holder} rounded-circle`}
                        >
                          <FiClock color="var(--adlas-color-white)" />
                        </div>
                        <div className="">
                          <aside>Operation Hours </aside>
                          <p>Mon-Satday: 09.00 to 07.00 (Sunday: Closed)</p>
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
      <div className="mb-lg-0 mb-0">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <iframe
            className={styles.contact_map_iframe}
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15855.402377752765!2d3.3467128110073703!3d6.540543845236132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s8%20%2C%20Okunade%20street%20Charity%20bus%20stop%2C%20Oshodi%20Lagos%20State!5e0!3m2!1sen!2sng!4v1690273396238!5m2!1sen!2sng"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      </section>
    
    </Fragment>
  );
};

export default ContactUsPage;
