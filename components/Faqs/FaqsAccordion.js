"use client";

import styles from "@/styles/faqs.module.css";
import { Fragment, useState } from "react";
import { servicesList } from "@/utils/config";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
const FaqsAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    console.log(openAccordion, index);
    if (index !== openAccordion) {
      setOpenAccordion(index);
    } else {
      setOpenAccordion(null);
    }
  };

  return (
    <div className={styles.faqs_accordion_container}>
      {servicesList.map((_data, index) => {
        return (
          <div
            key={index}
            className={`${styles.faqs_accordion_item} ${
              openAccordion === index ? styles.open : ""
            }`}
          >
            <div
              className={styles.faqs_accordion_header}
              onClick={() => handleAccordionClick(index)}
            >
              <div className={styles.faqs_accordion_header_container}>
                <Fragment>
                  <p className={styles.faqs_accordion_number}>{`0${
                    index + 1
                  }`}</p>
                  <p className={styles.faqs_accordion_name}>{_data.name}</p>
                </Fragment>
                {openAccordion === index ? (
                  <FiChevronUp fontSize={22} color="var( --adlas-nav-color)" />
                ) : (
                  <FiChevronDown
                    fontSize={22}
                    color="var( --adlas-nav-color)"
                  />
                )}
              </div>
            </div>

            <div className={styles.faqs_accordion_details}>
              <p>{_data.summary2}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqsAccordion;
