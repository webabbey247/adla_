"use client";

import styles from "@/styles/faqs.module.css";
import { Fragment, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FaqsAccordion = ({ isData }) => {
  const [openAccordion, setOpenAccordion] = useState(0);

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
      {isData.map((_data, index) => {
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
                  <p className={styles.faqs_accordion_name}>
                    {_data.possible_question}
                  </p>
                </Fragment>
                {openAccordion === index ? (
                  <FiMinus fontSize={22} color="var( --adlas-nav-color)" />
                ) : (
                  <FiPlus fontSize={22} color="var( --adlas-nav-color)" />
                )}
              </div>
            </div>

            <div className={styles.faqs_accordion_details}>
              {/* <p>{_data.possible_answer}</p> */}
              <p
                dangerouslySetInnerHTML={{
                  __html: _data.possible_answer,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqsAccordion;
