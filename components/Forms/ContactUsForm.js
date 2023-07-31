"use client";

import styles from "@/styles/forms.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactValidationSchema } from "@/utils/validation";
import { useState } from "react";
import Select from "react-select";
import { servicesList } from "@/utils/config";

const ContactUsForm = () => {
  const [mobile, setMobile] = useState(null);
  const [services, setServices] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactValidationSchema),
  });

  const handleContactUs = async (data) => {
    const payload = {
      customer_full_name: data.fullName,
      customer_email_address: data.emailAddress,
      customer_mobile_number: mobile ? mobile : data.mobileNumber,
      customer_hear_about_us: data.aboutUs,
      customer_enquiries: data.enquiry,
    };

    console.log("form info", payload);
    reset();
  };

  return (
    <div
      className={`${styles.general_form_container} p-lg-0 m-lg-0 position-relative`}
    >
      <form className="row" onSubmit={handleSubmit(handleContactUs)}>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mb-lg-3 mt-sm-3">
            <input
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Full name"
              {...register("fullName")}
            />
            {errors.fullName && (
              <span className={styles.input_errors}>
                {errors.fullName.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <input
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Email address"
              {...register("emailAddress")}
            />
            {errors.emailAddress && (
              <span className={styles.input_errors}>
                {errors.emailAddress.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <Controller
              name="mobileNumber"
              {...register("mobileNumber", {
                onChange: (e) => {
                  setMobile(e.target.value);
                },
              })}
              control={control}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  className="form-control"
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="NG"
                  placeholder="Enter phone number"
                />
              )}
            />
            {errors.mobileNumber && (
              <span className={styles.input_errors}>
                {errors.mobileNumber.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <input
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="How did you hear about Adla?"
              {...register("aboutUs")}
            />
            {errors.aboutUs && (
              <span className={styles.input_errors}>
                {errors.aboutUs.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mb-lg-2">
            <textarea
              className={`${styles.general_text_area} form-control`}
              rows="7"
              placeholder="Enter your message?"
              {...register("enquiry")}
            ></textarea>
            {errors.enquiry && (
              <span className={styles.input_errors}>
                {errors.enquiry.message}
              </span>
            )}
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
