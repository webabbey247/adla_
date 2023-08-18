"use client";

import styles from "@/styles/faqs.module.css";
import FaqsAccordion from "../Faqs/FaqsAccordion";
import { useAllFaqsQuery } from "@/redux/services/sitemap/sitemapApiSlice";
import { ToastService } from "@/lib/toast.service";
const FaqsCard = () => {
  const {
    data: isFaqsData,
    isLoading,
    isFetching,
    isError,
  } = useAllFaqsQuery();

  if (isError) {
    ToastService.error(
      "Something went wrong, try again or contact your webmaster, kindly try again"
    );
  }
  return (
    <div className={styles.faqs_accordion_section}>
      <div className="container-fluid nav-padding">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={styles.faqs_accordion_ltr}>
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                  <div className={styles.faqs_accordion_ltr_text}>
                    <h4>Got questions? Find answers here.</h4>
                    <p>
                      If you are looking for quick answers to the most important
                      questions about your Adla Global Business, our FAQs cover
                      the most common questions.
                    </p>
                  </div>

                  <div className={styles.faqs_accordion_ltr_container}>
                    {isLoading || isFetching ? (
                      <div className="d-flex justify-content-center align-items-center">
                        <span
                          className="spinner-border spinner-border-sm mr-4"
                          role="status"
                          aria-hidden="true"
                        />
                      </div>
                    ) : (
                      <FaqsAccordion isData={isFaqsData?.data} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqsCard;
