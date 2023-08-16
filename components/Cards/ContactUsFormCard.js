import styles from "@/styles/contactus.module.css";
import { ContactUsForm } from "../Forms";
import ContactInfoCard from "./ContactInfoCard";
const ContactUsFormCard = () => {
  return (
    <div className={`${styles.contact_us_form_section}`}>
      <div className="container-fluid nav_padding">
        <div className={styles.contact_us_form_row}>
          <div className="row">
            <div
              className={`${styles.contact_us_form_container} col-lg-8 offset-lg-2 col-md-12`}
            >
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 order-last">
                  <ContactUsForm />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 order-first">
                  <ContactInfoCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsFormCard;
