import styles from "@/styles/forms.module.css";
import {FiMail} from "react-icons/fi"

const SubscribersForm = () => {
  return (
    <div className={styles.subscribe_form_container}>
      <form className={styles.subscribe_form}>
        <div className="position-relative">
          <div className="d-flex align-items-center mb-0 rounded-0">
            <label htmlFor="mail" className="mb-0 d-inline-block">
             <FiMail size={24} />
            </label>
            <input
              type="email"
              className={`form-control ${styles.subscribe_input}`}
              placeholder="Enter your email"
            />
          </div>
          <button className={styles.subscribe_input_button}>Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default SubscribersForm;
