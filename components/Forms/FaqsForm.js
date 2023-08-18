"use client";

import styles from "@/styles/forms.module.css";
import "react-quill/dist/quill.snow.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { modules, QuillWrapper } from "@/utils/constant";
import { FiClipboard } from "react-icons/fi";
import { faqsValidationSchema } from "@/utils/validation";
import { useNewSingleFaqMutation } from "@/redux/services/admin/adminApiSlice";
import { useEffect } from "react";
import { ToastService } from "@/lib/toast.service";
import { resetFaqForm } from "@/redux/services/sitemap/sitemapSlice";
import { useDispatch } from "react-redux";

const FaqsForm = () => {
  const dispatch = useDispatch();
  const [
    newSingleFaq,
    { data: isFaqData, isLoading, isSuccess, isError, error },
  ] = useNewSingleFaqMutation();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(faqsValidationSchema),
  });

  const handleResetFaq = () => {
    dispatch(resetFaqForm());
  };

  const handleFAQs = async (data) => {
    const payload = {
      possible_question: data.possibleQuestion,
      possible_answer: data.possibleAnswer,
    };

    console.log("form info", payload);

    try {
      const faqRes = await newSingleFaq(payload);
      return faqRes;
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
        reset();
        dispatch(resetFaqForm());
        ToastService.success(isFaqData?.message);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isFaqData, isError, isSuccess, error]
  );
  return (
    <div
      className={`${styles.general_form_container} p-lg-0 m-lg-0 position-relative`}
    >
      <form className="row" onSubmit={handleSubmit(handleFAQs)}>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <label className={styles.form_control_label}>
            Question <span className="text-danger">*</span>
          </label>
          <div className="input-group input-group-merge">
            <div
              className={`input-group-prepend ${styles.input_group_prepend}`}
            >
              <span className={`input-group-text ${styles.input_group_text}`}>
                <FiClipboard color="var(--sidebar-nav-color)" fontSize="22px" />
              </span>
            </div>
            <input
              name="question"
              type="text"
              className={`${styles.general_input} form-control`}
              placeholder="Question *"
              {...register("possibleQuestion")}
            />
            {errors.possibleQuestion && (
              <span className={styles.input_errors}>
                {errors.possibleQuestion.message}
              </span>
            )}
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
          <label className={styles.form_control_label}>
            Possible Answer <span className="text-danger">*</span>
          </label>
          <Controller
            name="complaint"
            {...register("possibleAnswer")}
            control={control}
            render={({ field }) => (
              <QuillWrapper
                {...field}
                modules={modules}
                theme="snow"
                // defaultValue={value}
                // value={value}
                // onChange={(value) => onChange(value)}
              />
            )}
          />
          {errors.possibleAnswer && (
            <span className={styles.input_errors}>
              {errors.possibleAnswer.message}
            </span>
          )}
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
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

          <button
            onClick={() => handleResetFaq()}
            type="button"
            className={`${styles.general_cancel_button} pb-0 mx-lg-3`}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FaqsForm;
