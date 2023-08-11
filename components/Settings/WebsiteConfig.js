"use client";

import styles from "@/styles/layout.module.css";
import { SiteConfigurationForm } from "../Forms";
import { useGetWebsiteConfigQuery } from "@/redux/services/admin/adminApiSlice";
const WebsiteConfig = () => {
  const { data: isData, isLoading, isFetching } = useGetWebsiteConfigQuery();
  return (
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div className={`card ${styles.card}`}>
        <div className={`${styles.page_header} d-flex flex-column flex-wrap`}>
          <h4>Website Configurations</h4>
          <p>
            This is your contact database. From here, you can view, organize and
            manage your contacts, individually or as a group.
          </p>
        </div>
        <div className={`card-body ${styles.card_body} p-0`}>
          {isLoading || isFetching ? (
            <div className="d-flex align-items-center justify-content-center">
              <span
                className="spinner-border spinner-border-lg"
                role="status"
                aria-hidden="true"
              />
            </div>
          ) : (
            <SiteConfigurationForm isWebData={isData?.data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default WebsiteConfig;
