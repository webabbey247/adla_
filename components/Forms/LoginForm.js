"use client";

import styles from "@/styles/forms.module.css";
import { useState, useEffect } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`${styles.general_form_container} p-lg-0 m-lg-0 position-relative`}
    >
      <form className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mb-lg-3 mt-sm-3">
            <input
              type="email"
              className={`${styles.general_input} form-control w-100`}
              placeholder="Email address"
            />
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mb-lg-3">
            <input
              type="password"
              className={`${styles.general_input} form-control w-100`}
              placeholder="Password"
            />
            <span
              className={styles.general_input_form_icon}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FiEyeOff
                  fontSize="22px"
                  color="var(--adlas-secondary-color)"
                />
              ) : (
                <FiEye fontSize="22px" color="var(--adlas-secondary-color)" />
              )}
            </span>
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mb-lg-2">
            <button
              type="submit"
              className={`${styles.general_input_button} w-100`}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
