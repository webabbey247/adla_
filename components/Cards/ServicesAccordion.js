"use client";

import styles from "@/styles/services.module.css";
import { Fragment, useState } from "react";
import { servicesList } from "@/utils/config";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
const ServicesAccordionCard = () => {
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
    <div className={styles.accordion_container}>
      {servicesList.map((_data, index) => {
        return (
          <div
            key={index}
            className={`${styles.accordion_item} ${
              openAccordion === index ? styles.open : ""
            }`}
          >
            <div
              className={styles.accordion_header}
              onClick={() => handleAccordionClick(index)}
            >
              <div className={styles.accordion_header_container}>
                <Fragment>
                  <p className={styles.accordion_number}>{`0${index + 1}`}</p>
                  <p className={styles.accordion_name}>{_data.name}</p>
                </Fragment>
                { openAccordion === index ? (
                <FiChevronUp fontSize={22} color="var(--adlas-color-white)" />
                ) : (
                  <FiChevronDown fontSize={22} color="var(--adlas-color-white)" />
                )}
                {/* <FiChevronDown fontSize={22} color="var(--adlas-color-white)" /> */}
              </div>
            </div>

            <div className={styles.accordion_details}>
              <p>{_data.summary2}</p>
            </div>
          </div>
        );
      })}

      {/* <div
        className={`${styles.accordion_item} ${
          openAccordion === 1 ? styles.open : ""
        }`}
      >
        <div
          className={styles.accordion_header}
          onClick={() => handleAccordionClick(1)}
        >
          <p className={styles.accordion_number}>02</p>
          <p className={styles.accordion_name}>
            Famous Inventors and Their Inventions
          </p>
        </div>
        <div className={styles.accordion_details}>
          <ul>
            <li>
              Nikola Tesla, a Serbian-American inventor, is credited with the
              invention of the AC (alternating current) electrical system.
            </li>
            <li>
              Thomas Edison, an American inventor, is credited with the
              invention of the light bulb.
            </li>
            <li>
              Alexander Graham Bell, a Scottish-born American inventor, is
              credited with the invention of the telephone.
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${styles.accordion_item} ${
          openAccordion === 2 ? styles.open : ""
        }`}
      >
        <div
          className={styles.accordion_header}
          onClick={() => handleAccordionClick(2)}
        >
          <p className={styles.accordion_number}>03</p>
          <p className={styles.accordion_name}>Largest Deserts in the World</p>
        </div>
        <div className={styles.accordion_details}>
          <ul>
            <li>
              The Sahara Desert, located in Africa, is the largest hot desert in
              the world and covers an area of 9.2 million square kilometers (3.6
              million square miles).
            </li>
            <li>
              The Antarctic Desert, located in Antarctica, is the largest cold
              desert in the world and covers an area of 14 million square
              kilometers (5.4 million square miles).
            </li>
            <li>
              The Arabian Desert, located in the Middle East, is the
              third-largest desert in the world and covers an area of 2.33
              million square kilometers (900,000 square miles).
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${styles.accordion_item} ${
          openAccordion === 3 ? styles.open : ""
        }`}
      >
        <div
          className={styles.accordion_header}
          onClick={() => handleAccordionClick(3)}
        >
          <p className={styles.accordion_number}>04</p>
          <p className={styles.accordion_name}>Largest Deserts in the World</p>
        </div>
        <div className={styles.accordion_details}>
          <ul>
            <li>
              The Sahara Desert, located in Africa, is the largest hot desert in
              the world and covers an area of 9.2 million square kilometers (3.6
              million square miles).
            </li>
            <li>
              The Antarctic Desert, located in Antarctica, is the largest cold
              desert in the world and covers an area of 14 million square
              kilometers (5.4 million square miles).
            </li>
            <li>
              The Arabian Desert, located in the Middle East, is the
              third-largest desert in the world and covers an area of 2.33
              million square kilometers (900,000 square miles).
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default ServicesAccordionCard;
