import styles from "@/styles/forms.module.css";

const GetQuoteForm = () => {
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
              placeholder="Contact Person"
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <input
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Contact email address"
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <input
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Contact mobile number"
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
    <div className="mb-lg-3">
      <input
        type="email"
        className={`${styles.general_input} form-control`}
        placeholder="Company name"
      />
    </div>
  </div>

  <div className="col-lg-6 col-md-12 col-sm-12">
    <div className="mb-lg-3">
      <input
        type="email"
        className={`${styles.general_input} form-control`}
        placeholder="Company URL"
      />
    </div>
  </div>

  <div className="col-lg-8 col-md-12 col-sm-12">
    <div className="mb-lg-3">
      <input
        type="email"
        className={`${styles.general_input} form-control`}
        placeholder="Company physical address"
      />
    </div>
  </div>

  <div className="col-lg-4 col-md-12 col-sm-12">
    <div className="mb-lg-3">
      <input
        type="email"
        className={`${styles.general_input} form-control`}
        placeholder="Company URL"
      />
    </div>
  </div>


       

        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mb-lg-2">
            {/* <label className="form-label mb-0">
      Tell us more about the services you need?
      </label> */}
            <textarea
              className={`${styles.general_text_area} form-control`}
              rows="7"
              placeholder="Tell us more about the services you need?"
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

export default GetQuoteForm;
