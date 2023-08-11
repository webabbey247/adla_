import styles from "@/styles/layout.module.css";
import { ChangePasswordForm } from "../Forms";
const PasswordConfig = () => {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div className={`card ${styles.card}`}>
        <div className={`${styles.page_header} d-flex flex-column flex-wrap`}>
          <h4>Changed Password</h4>
          <p>
            This is your contact database. From here, you can view, organize and
            manage your contacts, individually or as a group.
          </p>
        </div>
        <div className={`card-body ${styles.card_body} p-0`}>
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
};

export default PasswordConfig;
