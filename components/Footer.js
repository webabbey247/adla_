import styles from "@/styles/layout.module.css";
import Image from "next/image";
import { SubscribersForm } from "./Forms";
import { FiInstagram, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import { useSelector } from "react-redux";
import Link from "next/link";

const Footer = () => {
  const {
    isLoading,
    isFetching,
    mobileNumber,
    emailAddress,
    instagramHandle,
    twitterHandle,
    linkedinHandle,
    facebookHandle,
  } = useSelector((state) => state.sitemap);

  return (
    <section className={`${styles.footer_section} pt-lg-5 position-relative`}>
      <div className={`container-fluid ${styles.nav_padding}`}>
        <div className="row pb-lg-5">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="">
              <p className="font-size-5 mb-0 text-bali-gray pr-sm-10 pr-md-0">
                Adla Global Business Solutions is the procurement and export
                partner you can trust. We have extensive industry expertise,
                reliable sourcing, seamless logistics, and a customer-centric
                approach to ensure your business succeeds.
              </p>
              {isLoading || isFetching ? (
                <div className="d-flex justify-content-center align-items-center align-content-center">
                  <span
                    className="spinner-border text-light spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                </div>
              ) : (
                <ul className={`${styles.social} py-lg-4`}>
                  <li>
                    <a href={instagramHandle} target="__blank">
                      <FiFacebook />
                    </a>
                  </li>
                  <li>
                    <a href={twitterHandle} target="__blank">
                      <FiTwitter />
                    </a>
                  </li>
                  <li>
                    <a href={linkedinHandle} target="__blank">
                      <FiInstagram />
                    </a>
                  </li>

                  <li>
                    <a href={facebookHandle} target="__blank">
                      <FiLinkedin />
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-12">
                <div className="mb-lg-0 position-relative">
                  <h4 className="mb-lg-4">Company</h4>
                  <ul className="list-unstyled">
                    <li className="mb-lg-3">
                      <Link href="/about">About Us</Link>
                    </li>

                    <li className="mb-lg-3">
                      <Link href="/contact">Contact Us</Link>
                    </li>

                    <li className="mb-lg-3">
                      <Link href="/get-quote">Get Quote</Link>
                    </li>

                    {/* <li className="mb-lg-3">
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li> */}
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
                  {isLoading || isFetching ? (
                    <div className="d-flex justify-content-center align-items-center align-content-center">
                      <span
                        className="spinner-border text-light spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                    </div>
                  ) : (
                    <ul className="list-unstyled">
                      <li className="mb-lg-3">
                        <a href="/">{mobileNumber}</a>
                      </li>
                      <li className="mb-lg-3">
                        <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                      </li>
                    </ul>
                  )}
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
