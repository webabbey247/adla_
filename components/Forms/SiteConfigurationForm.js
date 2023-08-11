"use client";

import styles from "@/styles/forms.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { webConfigValidationSchema } from "@/utils/validation";
import { useState, useEffect } from "react";
import { useUpdateWebsiteConfigMutation } from "@/redux/services/admin/adminApiSlice";
import { ToastService } from "@/lib/toast.service";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiTwitter,
} from "react-icons/fi";
import { useRef } from "react";

const SiteConfigurationForm = ({ isWebData }) => {
  const ref = useRef(null);
  const [mobile, setMobile] = useState(isWebData?.mobile_number);
  const [
    updateWebsiteConfig,
    { data: isWebsiteData, isLoading, isSuccess, isError, error },
  ] = useUpdateWebsiteConfigMutation();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(webConfigValidationSchema),
  });

  const handleWebConfig = async (data) => {
    const payload = {
      company_address: data.companyAddress,
      email_address: data.emailAddress,
      mobile_number: mobile ? mobile : data.mobileNumber,
      instagram_handle: data.instagramHandle,
      twitter_handle: data.twitterHandle,
      linkedin_handle: data.linkedinHandle,
      facebook_handle: data.facebookHandle,
    };

    console.log("form info", payload);

    try {
      const webConfigRes = await updateWebsiteConfig(payload);
      console.log("hello webConfigRes", webConfigRes);
      if (webConfigRes?.data.success) {
        ToastService.success(webConfigRes?.data.message);
      } else {
        ToastService.error(webConfigRes?.data.message || webConfigRes?.message);
      }
      // return webConfigRes;
    } catch (err) {
      console.log("error response", err.response);
    }
  };

  // useEffect(() => {
  //     if (isError) {
  //       ToastService.error(error?.data.message || error?.message);
  //     }
  //     if (isSuccess) {
  //       console.log("hello success", isWebsiteData)
  //       reset();
  //       ToastService.success(isWebsiteData?.data.message);
  //     }
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [isWebsiteData, isError, isSuccess, error]
  // );

  return (
    <div
      className={`${styles.general_form_container} p-lg-0 m-lg-0 position-relative`}
    >
      <form className="row" onSubmit={handleSubmit(handleWebConfig)}>
        <div className="col-lg-8 col-md-12 col-sm-12">
          <label className={styles.form_control_label}>
            Company Address <span className="text-danger">*</span>
          </label>
          <div className="input-group input-group-merge">
            <div
              className={`input-group-prepend ${styles.input_group_prepend}`}
            >
              <span className={`input-group-text ${styles.input_group_text}`}>
                <FiMapPin color="var(--sidebar-nav-color)" fontSize="22px" />
              </span>
            </div>
            <input
              ref={ref}
              name="company_address"
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Company Address *"
              defaultValue={isWebData?.company_address}
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
          <label className={styles.form_control_label}>
            Email Address <span className="text-danger">*</span>
          </label>
          <div className="input-group input-group-merge">
            <div
              className={`input-group-prepend ${styles.input_group_prepend}`}
            >
              <span className={`input-group-text ${styles.input_group_text}`}>
                <FiMail color="var(--sidebar-nav-color)" fontSize="22px" />
              </span>
            </div>
            <input
              ref={ref}
              name="emailAddress"
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Email Address *"
              defaultValue={isWebData?.email_address}
              {...register("emailAddress")}
            />
            {errors.emailAddress && (
              <span className={styles.input_errors}>
                {errors.emailAddress.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12">
          <label className={styles.form_control_label}>
            Phone number <span className="text-danger">*</span>
          </label>
          <div className="input-group input-group-merge">
            <div
              className={`input-group-prepend ${styles.input_group_prepend}`}
            >
              <span className={`input-group-text ${styles.input_group_text}`}>
                <FiPhoneCall color="var(--sidebar-nav-color)" fontSize="22px" />
              </span>
            </div>
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
                  ref={ref}
                  className="form-control"
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="NG"
                  placeholder="Enter phone number"
                  value={mobile || ""}
                />
              )}
            />
            {errors.mobileNumber && (
              <span className={styles.input_errors}>
                {errors.mobileNumber.message}
              </span>
            )}
            {/* <input
              name="mobile_number"
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Mobile Number *"
              value="+2349092558106"
            /> */}
          </div>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12">
          <label className={styles.form_control_label}>
            Instagram <span className="text-danger">*</span>
          </label>
          <div className="input-group input-group-merge">
            <div
              className={`input-group-prepend ${styles.input_group_prepend}`}
            >
              <span className={`input-group-text ${styles.input_group_text}`}>
                <FiInstagram color="var(--sidebar-nav-color)" fontSize="22px" />
              </span>
            </div>
            <input
              ref={ref}
              name="instagramHandle"
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Instagram Handle *"
              defaultValue={isWebData?.instagram_handle}
              {...register("instagramHandle")}
            />
            {errors.instagramHandle && (
              <span className={styles.input_errors}>
                {errors.instagramHandle.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12">
          <label className={styles.form_control_label}>
            Twitter <span className="text-danger">*</span>
          </label>
          <div className="input-group input-group-merge">
            <div
              className={`input-group-prepend ${styles.input_group_prepend}`}
            >
              <span className={`input-group-text ${styles.input_group_text}`}>
                <FiTwitter color="var(--sidebar-nav-color)" fontSize="22px" />
              </span>
            </div>
            <input
              ref={ref}
              name="twitterHandle"
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Twitter Handle *"
              defaultValue={isWebData?.twitter_handle}
              {...register("twitterHandle")}
            />
            {errors.twitterHandle && (
              <span className={styles.input_errors}>
                {errors.twitterHandle.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12">
          <label className={styles.form_control_label}>
            Facebook <span className="text-danger">*</span>
          </label>
          <div className="input-group input-group-merge">
            <div
              className={`input-group-prepend ${styles.input_group_prepend}`}
            >
              <span className={`input-group-text ${styles.input_group_text}`}>
                <FiFacebook color="var(--sidebar-nav-color)" fontSize="22px" />
              </span>
            </div>
            <input
              ref={ref}
              name="facebookHandle"
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Facebook Handle *"
              defaultValue={isWebData?.facebook_handle}
              {...register("facebookHandle")}
            />
            {errors.facebookHandle && (
              <span className={styles.input_errors}>
                {errors.twitterHandle.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12">
          <label className={styles.form_control_label}>
            LinkedIn <span className="text-danger">*</span>
          </label>
          <div className="input-group input-group-merge">
            <div
              className={`input-group-prepend ${styles.input_group_prepend}`}
            >
              <span className={`input-group-text ${styles.input_group_text}`}>
                <FiLinkedin color="var(--sidebar-nav-color)" fontSize="22px" />
              </span>
            </div>
            <input
              ref={ref}
              name="linkedinHandle"
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="LinkedIn Handle *"
              defaultValue={isWebData?.linkedin_handle}
              {...register("linkedinHandle")}
            />
            {errors.linkedinHandle && (
              <span className={styles.input_errors}>
                {errors.linkedinHandle.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mb-lg-2">
            {isLoading ? (
              <button
                className={`${styles.general_input_button} pb-0 mb-0`}
                type="button"
              >
                <span
                  className="spinner-border spinner-border-sm mr-4"
                  role="status"
                  aria-hidden="true"
                />
              </button>
            ) : (
              <button
                type="submit"
                className={`${styles.general_input_button} pb-0 mb-0`}
              >
                Save Changes
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SiteConfigurationForm;
