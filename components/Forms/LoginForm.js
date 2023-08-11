"use client";

import styles from "@/styles/forms.module.css";
import { useState, useEffect } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { loginUserValidationSchema } from "@/utils/validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastService } from "@/lib/toast.service";
import { useLoginUserMutation } from "@/redux/services/auth/authApiSlice";
import { setCredentials } from "@/redux/services/auth/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { IS_ADMIN } from "@/utils/constant";

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [
    loginUser,
    { data: isUserData, isLoading, isError, error, isSuccess },
  ] = useLoginUserMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginUserValidationSchema),
  });

  const handleLoginUser = async (data) => {
    const formData = {
      email: data.emailAddress,
      password: data.password,
    };
    try {
      const loginRes = await loginUser(formData);
      return loginRes;
    } catch (err) {
      console.log("error response", err.response);
    }
  };

  useEffect(() => {
    if (isError) {
      console.log("hello error", error);
      ToastService.error(error?.data.message || error?.message);
    }
    if (isSuccess) {
      reset();
      ToastService.success(isUserData?.message);
      dispatch(setCredentials(isUserData.authorization));
      setTimeout(() => router.push(IS_ADMIN), 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserData, isError, isSuccess, error]);

  return (
    <div
      className={`${styles.general_form_container} p-lg-0 m-lg-0 position-relative`}
    >
      <form className="row" onSubmit={handleSubmit(handleLoginUser)}>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mb-lg-3 mt-sm-3">
            <input
              type="email"
              className={`${styles.general_input} form-control w-100`}
              placeholder="Email address"
              {...register("emailAddress")}
            />
            {errors.emailAddress && (
              <small className="text-danger">
                {errors.emailAddress.message}
              </small>
            )}
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mb-lg-3 position-relative">
            <input
              type={showPassword ? "text": "password"}
              className={`${styles.general_input} form-control w-100`}
              placeholder="Password"
              {...register("password")}
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
            {errors.password && (
              <small className="text-danger">{errors.password.message}</small>
            )}
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mb-lg-2">
            {isLoading ? (
              <button
                className={`${styles.general_input_button} w-100`}
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
                className={`${styles.general_input_button} w-100`}
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

export default LoginForm;
