"use client";

import styles from "@/styles/forms.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import { getQuoteValidationSchema } from "@/utils/validation";
import { useState, useEffect } from "react";
import { servicesList } from "@/utils/config";
import { useServicesQuotationMutation } from "@/redux/services/sitemap/sitemapApiSlice";
import { ToastService } from "@/lib/toast.service";


const GetQuoteForm = () => {
  const [mobile, setMobile] = useState(null);
  const [services, setServices] = useState([]);
  const [
    servicesQuotation,
    { data: isQuotationData, isLoading, isSuccess, isError, error },
  ] = useServicesQuotationMutation();
  const {
    register,
    handleSubmit,
    setValue,
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
      customer_company_address: data.companyAddress,
      customer_notes: data.customerNotes,
    };

    console.log("form info", payload);

    try {
      const requestQuoteRes = await servicesQuotation(payload);
      return requestQuoteRes;
    } catch (err) {
      console.log("error response", err.response);
    }
  };

  useEffect(
    () => {
      if (isError) {
        ToastService.error(error?.data.message || error?.message);
      }

      if (isSuccess) {
        setValue("services", []);
        reset();
        ToastService.success(isQuotationData?.message);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isQuotationData, isError, isSuccess, error]
  );
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
                  value={services}
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

        <div className="col-lg-12 col-md-12 col-sm-12">
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

        {/* <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <Controller
              name="companyCountry"
              {...register("companyCountry", {
                onChange: (e) => {
                  setCountry(e.target.value);
                },
              })}
              control={control}
              render={({ field }) => (
                <Select
                  value={country}
                  {...field}
                  isClearable
                  isSearchable
                  className="form-control"
                  placeholder="Select country"
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
        </div> */}

        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mb-lg-2">
            <textarea
              name="customerNotes"
              className={`${styles.general_text_area} form-control`}
              rows="7"
              {...register("customerNotes")}
              placeholder=""
            ></textarea>
            {errors.customerNotes && (
              <span className={styles.input_errors}>
                {errors.customerNotes.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mb-lg-0">
            {isLoading ? (
              <button className={styles.general_input_button} type="button">
                <span
                  className="spinner-border spinner-border-sm mr-4"
                  role="status"
                  aria-hidden="true"
                />
              </button>
            ) : (
              <button
                type="submit"
                className={`${styles.general_input_button} pb-0`}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default GetQuoteForm;
