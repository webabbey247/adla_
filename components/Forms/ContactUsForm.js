import styles from "@/styles/forms.module.css";

const ContactUsForm = () => {
  return (
    <div
      className={`${styles.general_form_container} p-lg-0 m-lg-0 position-relative`}
    >
      <form className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <input
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Full name"
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <input
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Email address"
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <input
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Mobile number"
            />
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <input
              type="email"
              className={`${styles.general_input} form-control`}
              placeholder="How did you hear about Adla?"
            />
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mb-lg-2">
            <textarea
              className={`${styles.general_text_area} form-control`}
              rows="7"
              placeholder="Enter your message?"
            ></textarea>
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mb-lg-2">
            <button type="submit" className={styles.general_input_button}>
             Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
