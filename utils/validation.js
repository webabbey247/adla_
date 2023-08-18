import * as yup from "yup";

export const contactValidationSchema = yup.object().shape({
  fullName: yup.string().trim().required("Kindly provide your first name!"),
  emailAddress: yup
    .string()
    .trim()
    .required("Kindly provide a valid email address!"),
  mobileNumber: yup
    .string()
    .trim()
    .required("Kindly provide a valid mobile number!"),
  enquiry: yup
    .string()
    .trim()
    .required("Kindly explain more about your enquiries!"),
});

export const emailSubscriptionSchema = yup.object().shape({
  emailAddress: yup
    .string()
    .trim()
    .required("Kindly provide a valid email address!"),
});

export const getQuoteValidationSchema = yup.object().shape({
  services: yup
    .array()
    .required("Kindly select your preferred services")
    .min(1, "Kindly select your preferred services"),

  fullName: yup.string().trim().required("Kindly provide your full name!"),
  emailAddress: yup
    .string()
    .trim()
    .required("Kindly provide a valid email address!"),
  mobileNumber: yup
    .string()
    .trim()
    .required("Kindly provide a valid mobile number!"),
  companyName: yup
    .string()
    .trim()
    .required("Kindly provide your company name!"),
  customerNotes: yup
    .string()
    .trim()
    .required("Kindly tell us more about the services you need!"),
});

export const webConfigValidationSchema = yup.object().shape({
  companyAddress: yup
    .string()
    .trim()
    .required("Kindly provide your company address!"),
  emailAddress: yup
    .string()
    .trim()
    .required("Kindly provide a valid email address!"),
  mobileNumber: yup
    .string()
    .trim()
    .required("Kindly provide a valid mobile number!"),
});

export const loginUserValidationSchema = yup.object().shape({
  emailAddress: yup
    .string()
    .trim()
    .required("Kindly provide a valid email address!"),
  password: yup
    .string()
    .trim()
    .required("Kindly provide your preferred password!"),
});

export const changePasswordValidationSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .trim()
    .required("Kindly provide your  valid current password!"),
  newPassword: yup
    .string()
    .trim()
    .required("Kindly provide your preferred password!"),
  passwordConfirmation: yup
    .string()
    .required("Kindly provide your preferred password")
    .oneOf([yup.ref("newPassword")], "Passwords does not match"),
});

export const faqsValidationSchema = yup.object().shape({
  possibleQuestion: yup
    .string()
    .trim()
    .required("Kindly provide your preferred question!"),
  possibleAnswer: yup
    .string()
    .trim()
    .required("Kindly describe your possible answer!"),
});
