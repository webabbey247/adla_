"use client";

import styles from "@/styles/forms.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactValidationSchema } from "@/utils/validation";
import { useState, useEffect } from "react";
import { useContactUsMutation } from "@/redux/services/sitemap/sitemapApiSlice";
import { ToastService } from "@/lib/toast.service";

const ContactUsForm = () => {
  const [mobile, setMobile] = useState(null);
  const [
    contactUs,
    { data: isContactUs, isLoading, isSuccess, isError, error },
  ] = useContactUsMutation();
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
      hear_about_us: data.aboutUs,
      customer_enquiries: data.enquiry,
    };

    console.log("form info", payload);

    try {
      const contactUsRes = await contactUs(payload);
      return contactUsRes;
    } catch (err) {
      console.log("error response", err.response);
    }

    reset();
  };

  useEffect(
    () => {
      if (isError) {
        ToastService.error(error?.data.message || error?.message);
      }

      if (isSuccess) {
        reset();
        ToastService.success(isContactUs?.message);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isContactUs, isError, isSuccess, error]
  );

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
            {isLoading ? (
              <button className={styles.general_input_button} type="button">
                <span
                  className="spinner-border spinner-border-sm mr-4"
                  role="status"
                  aria-hidden="true"
                />
              </button>
            ) : (
              <button type="submit" className={styles.general_input_button}>
                Submit
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
