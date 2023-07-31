"use client";

import styles from "@/styles/forms.module.css";
import { emailSubscriptionSchema } from "@/utils/validation";
import { FiMail } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";

const SubscribersForm = () => {
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
    reset();
  };
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
          <button className={styles.subscribe_input_button}>Subscribe</button>
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
