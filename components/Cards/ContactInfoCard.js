"use client";

import styles from "@/styles/contactus.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import { FiMapPin, FiMail, FiClock } from "react-icons/fi";
import { Fragment } from "react";

const ContactInfoCard = () => {
  const { isLoading, isFetching, mobileNumber, companyAddress, emailAddress } =
    useSelector((state) => state.sitemap);
  return (
    <div className="d-flex flex-column w-100">
      <div className={styles.contact_text_info_holder}>
        <h4>Reach Our Expert Team</h4>
        <p>
          For urgent assistance, utilize the contact information provided or
          complete the{" "}
          <Link className={styles.get_quote_link} href="/get-quote">
            get quote
          </Link>{" "}
          form. Any other inquiries can be directed through the provided message
          form.
        </p>
      </div>

      <div
        className={`${styles.contact_info_holder} d-flex flex-lg-row justify-content-start align-self-start w-100`}
      >
        <div className={`${styles.contact_icon_holder} rounded-circle`}>
          <FiMapPin color="var(--adlas-color-white)" />
        </div>
        <div className="">
          <aside>Company Address</aside>
          {isLoading || isFetching ? (
            <span
              className="spinner-border text-dark spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            <p>{companyAddress}</p>
          )}
        </div>
      </div>

      <div
        className={`${styles.contact_info_holder} d-flex flex-lg-row justify-content-start align-self-start w-100`}
      >
        <div className={`${styles.contact_icon_holder} rounded-circle`}>
          <FiMail color="var(--adlas-color-white)" />
        </div>
        <div className="">
          <aside>General Enquires </aside>
          {isLoading || isFetching ? (
            <span
              className="spinner-border text-dark spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            <Fragment>
              <p>Email: {emailAddress}</p>
              <p>Phone: {mobileNumber}</p>
            </Fragment>
          )}
        </div>
      </div>

      <div
        className={`${styles.contact_info_holder} d-flex flex-lg-row justify-content-start align-self-start w-100`}
      >
        <div className={`${styles.contact_icon_holder} rounded-circle`}>
          <FiClock color="var(--adlas-color-white)" />
        </div>
        <div className="">
          <aside>Operation Hours </aside>
          <p>Mon-Satday: 09.00 to 07.00 (Sunday: Closed)</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
