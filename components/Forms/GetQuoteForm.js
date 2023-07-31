"use client";

import styles from "@/styles/forms.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactValidationSchema } from "@/utils/validation";
import { useState } from "react";
import { countryList, servicesList } from "@/utils/config";

const GetQuoteForm = () => {
  const [mobile, setMobile] = useState(null);
  const [country, setCountry] = useState([]);
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
      <form className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
      <div className="mb-lg-3">
            <Controller
              name="services"
              {...register("services", {
                onChange: (e) => {
                  setServices(e.target.value);
                },
              })}
              control={control}
              render={({ field }) => (
                <Select
                  defaultValue={services}
                  {...field}
                  isClearable
                  isSearchable
                  isMulti
                  className="form-control"
                  placeholder="Select products"
                  options={servicesList.map(({ name, value }) => ({
                    label: name,
                    value: value,
                  }))}
                />
              )}
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
              placeholder="Contact Person"
              {...register("contactFullName")}
            />
            {errors.contactFullName && (
              <span className={styles.input_errors}>
                {errors.contactFullName.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <input
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Contact email address"
              {...register("contactEmailAddress")}
            />
            {errors.contactEmailAddress && (
              <span className={styles.input_errors}>
                {errors.contactEmailAddress.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <Controller
              name="contactMobileNumber"
              {...register("contactMobileNumber", {
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
                  placeholder="Contact mobile number"
                />
              )}
            />
            {errors.contactMobileNumber && (
              <span className={styles.input_errors}>
                {errors.contactMobileNumber.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <input
              type="email"
              className={`${styles.general_input} form-control`}
              placeholder="Company name"
              {...register("companyName")}
            />
            {errors.companyName && (
              <span className={styles.input_errors}>
                {errors.companyName.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <input
              type="email"
              className={`${styles.general_input} form-control`}
              placeholder="Company URL"
              {...register("companyWebsiteUrl")}
            />
            {errors.companyWebsiteUrl && (
              <span className={styles.input_errors}>
                {errors.companyWebsiteUrl.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <input
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Company physical address"
              {...register("companyPhysicalAddress")}
            />
            {errors.companyPhysicalAddress && (
              <span className={styles.input_errors}>
                {errors.companyPhysicalAddress.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <Controller
              name="country"
              {...register("country", {
                onChange: (e) => {
                  setCountry(e.target.value);
                },
              })}
              control={control}
              render={({ field }) => (
                <Select
                  defaultValue={country}
                  {...field}
                  isClearable
                  isSearchable
                  classNamePrefix="form-control"
                  className="form-control"
                  placeholder="Country"
                  options={countryList.map(({ name }) => ({
                    label: name,
                    value: name,
                  }))}
                />
              )}
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
              {...register("enquiry")}
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
