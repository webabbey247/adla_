"use client";

import styles from "@/styles/forms.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordValidationSchema } from "@/utils/validation";
import { useState, useEffect } from "react";
import { FiLock } from "react-icons/fi";
import { useUpdateUserPasswordMutation } from "@/redux/services/admin/adminApiSlice";
import { logOut } from "@/redux/services/auth/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { ToastService } from "@/lib/toast.service";
import { UN_AUTHENTICATED } from "@/utils/constant";

const ChangePasswordForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [
    updateUserPassword,
    { data: isPasswordData, isLoading, isError, error, isSuccess },
  ] = useUpdateUserPasswordMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordValidationSchema),
  });

  const handleChangePassword = async (data) => {
    const payload = {
      old_password: data.currentPassword,
      new_password: data.newPassword,
      confirm_password: data.passwordConfirmation,
    };

    console.log("form info", payload);

    try {
      const updatePass = await updateUserPassword(payload);
      return updatePass;
    } catch (err) {
      console.log("error response", err.response);
    }
    reset();
  };

  useEffect(() => {
    if (isError) {
      ToastService.error(error?.data.message || error?.message);
    }
    if (isSuccess) {
      reset();
      dispatch(logOut());
      ToastService.success(isPasswordData?.message);
      setTimeout(() => router.push(UN_AUTHENTICATED), 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPasswordData, isError, isSuccess, error]);

  return (
    <div
      className={`${styles.general_form_container} p-lg-0 m-lg-0 position-relative`}
    >
      <form className="row" onSubmit={handleSubmit(handleChangePassword)}>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <label className={styles.form_control_label}>
            Current Password <span className="text-danger">*</span>
          </label>
          <div className="input-group input-group-merge">
            <div
              className={`input-group-prepend ${styles.input_group_prepend}`}
            >
              <span className={`input-group-text ${styles.input_group_text}`}>
                <FiLock color="var(--sidebar-nav-color)" fontSize="22px" />
              </span>
            </div>
            <input
              name="oldPassword"
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Current Password *"
              {...register("currentPassword")}
            />
            {errors.currentPassword && (
              <span className={styles.input_errors}>
                {errors.currentPassword.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12">
          <label className={styles.form_control_label}>
            New Password <span className="text-danger">*</span>
          </label>
          <div className="input-group input-group-merge">
            <div
              className={`input-group-prepend ${styles.input_group_prepend}`}
            >
              <span className={`input-group-text ${styles.input_group_text}`}>
                <FiLock color="var(--sidebar-nav-color)" fontSize="22px" />
              </span>
            </div>
            <input
              name="newPassword"
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="New Password *"
              {...register("newPassword")}
            />
            {errors.newPassword && (
              <span className={styles.input_errors}>
                {errors.newPassword.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12">
          <label className={styles.form_control_label}>
            Confirm Password <span className="text-danger">*</span>
          </label>
          <div className="input-group input-group-merge">
            <div
              className={`input-group-prepend ${styles.input_group_prepend}`}
            >
              <span className={`input-group-text ${styles.input_group_text}`}>
                <FiLock color="var(--sidebar-nav-color)" fontSize="22px" />
              </span>
            </div>
            <input
              name="passwordConfirmation"
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Confirm Password *"
              {...register("passwordConfirmation")}
            />
            {errors.passwordConfirmation && (
              <span className={styles.input_errors}>
                {errors.passwordConfirmation.message}
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

export default ChangePasswordForm;
