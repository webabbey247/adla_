"use client";

import styles from "@/styles/forms.module.css";
import { emailSubscriptionSchema } from "@/utils/validation";
import { FiMail } from "react-icons/fi";
import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useEmailSubscriptionMutation } from "@/redux/services/sitemap/sitemapApiSlice";
import { ToastService } from "@/lib/toast.service";

const SubscribersForm = () => {
  const [
    emailSubscription,
    { data: isSubcription, isLoading, isSuccess, isError, error },
  ] = useEmailSubscriptionMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailSubscriptionSchema),
  });

  const handleEmailSubscription = async (data) => {
    const payload = {
      customer_email_address: data.emailAddress,
    };

    console.log("form info", payload);

    try {
      const mailingList = await emailSubscription(payload);
      return mailingList;
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
        ToastService.success(isSubcription?.message);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isSubcription, isError, isSuccess, error]
  );

  return (
    <div className={styles.subscribe_form_container}>
      <form
        className={styles.subscribe_form}
        onSubmit={handleSubmit(handleEmailSubscription)}
      >
        <div className="position-relative">
          <div className="d-flex align-items-center mb-0 rounded-0">
            <label htmlFor="mail" className="mb-0 d-inline-block">
              <FiMail size={24} />
            </label>
            <input
              type="email"
              className={`form-control ${styles.subscribe_input}`}
              placeholder="Enter your email"
              {...register("emailAddress")}
            />
          </div>
          {isLoading ? (
            <button className={styles.subscribe_input_button} type="button">
              <span
                className="spinner-border spinner-border-sm mr-4"
                role="status"
                aria-hidden="true"
              />
            </button>
          ) : (
            <button className={styles.subscribe_input_button}>Subscribe</button>
          )}
        </div>
      </form>
      {errors.emailAddress && (
        <span className={styles.input_errors}>
          {errors.emailAddress.message}
        </span>
      )}
    </div>
  );
};

export default SubscribersForm;
