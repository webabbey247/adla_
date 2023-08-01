import styles from "@/styles/layout.module.css";
import Image from "next/image";
import { SubscribersForm } from "./Forms";
import { FiInstagram, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <section className={`${styles.footer_section} pt-lg-5 position-relative`}>
      <div className={`container-fluid ${styles.nav_padding}`}>
        <div className="row pb-lg-5">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="">
              {/* <div className="brand-logo mb-5"></div> */}
              <p className="font-size-5 mb-0 text-bali-gray pr-sm-10 pr-md-0">
                Adla Global Business Solutions is your trusted procurement and
                export partner with experience in industry expertise, reliable
                sourcing, seamless logistics, and customer-centric approach.
              </p>
              <ul className={`${styles.social} py-lg-4`}>
                <li>
                  <a href="/" target="__blank">
                    <FiFacebook />
                  </a>
                </li>
                <li>
                  <a href="/" target="__blank">
                    <FiTwitter />
                  </a>
                </li>
                <li>
                  <a href="/" target="__blank">
                    <FiInstagram />
                  </a>
                </li>

                <li>
                  <a href="/" target="__blank">
                    <FiLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-12">
                <div className="mb-lg-0 position-relative">
                  <h4 className="mb-lg-4">
                    Company
                  </h4>
                  <ul className="list-unstyled">
                    <li className="mb-lg-3">
                      <a href="/#">About Us</a>
                    </li>
                    <li className="mb-lg-3">
                      <a href="/#">Services</a>
                    </li>

                    <li className="mb-lg-3">
                      <a href="/#">Contact Us</a>
                    </li>

                    <li className="mb-lg-3">
                      <a href="/#">Privacy Policy</a>
                    </li>

                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="mb-lg-0 position-relative">
                <h4 className="mb-lg-4">Contacts</h4>
                  <p className="mb-lg-4">
                    Feel free to get in touch with us via phone or send us a
                    message.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-lg-3">
                      <a href="/">+234 913 257 4069</a>
                    </li>
                    <li className="mb-lg-3">
                      <a href="/">info@addressmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className={styles.footer_email_subscription}>
                <h4 className="mb-lg-4">Subscribe to Our Newsletter</h4>
                  <p className="mb-lg-4">
                    Time is the most precious thing you have when bootstrapping.
                  </p>

                  <SubscribersForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.bg_copyright} py-lg-3 text-lg-center`}>
        <div className="row align-items-center">
          <div className="col-lg-12 text-center">
            <p className="mb-0 text-white">
              &copy;{new Date().getFullYear()} Adla Global Business Solutions.
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footer_yellow_shape_img}>
        <Image
          src="/static/footer_bottom_img.png"
          width={255}
          height={225}
          alt="Footer bottom icon"
        />
      </div>
    </section>
  );
};

export default Footer;
