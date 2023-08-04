"use client";

import styles from "@/styles/forms.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import { getQuoteValidationSchema } from "@/utils/validation";
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
    resolver: yupResolver(getQuoteValidationSchema),
  });

  const handleServiceQuote = async (data) => {
    const payload = {
      services: services,
      customer_full_name: data.fullName,
      customer_email_address: data.emailAddress,
      customer_mobile_number: mobile ? mobile : data.mobileNumber,
      customer_company_name: data.companyName,
      // customer_company_address: [data.companyAddress, data.country.label].join(","),
      customer_notes: data.customerNotes,
    };

    console.log("form info", payload);
    reset();
    setServices(null);
  };
  return (
    <div
      className={`${styles.general_form_container} p-lg-0 m-lg-0 position-relative`}
    >
      <form className="row" onSubmit={handleSubmit(handleServiceQuote)}>
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
                  placeholder="Select preferred services"
                  options={servicesList.map(({ name, value }) => ({
                    label: name,
                    value: value,
                  }))}
                />
              )}
            />
            {errors.services && (
              <span className={styles.input_errors}>
                {errors.services.message}
              </span>
            )}
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <input
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Contact Person Full Name"
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
              placeholder="Contact email address"
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
                  placeholder="Contact mobile number"
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

        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <input
              type="text"
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

        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <input
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Company physical address"
              {...register("companyAddress")}
            />
            {errors.companyAddress && (
              <span className={styles.input_errors}>
                {errors.companyAddress.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <Controller
              name="country"
              {...register("companyCountry", {
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
            {errors.companyCountry && (
              <span className={styles.input_errors}>
                {errors.companyCountry.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mb-lg-2">
            <textarea
              className={`${styles.general_text_area} form-control`}
              rows="7"
              {...register("customerNotes")}
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

export default GetQuoteForm