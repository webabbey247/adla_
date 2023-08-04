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
  services: yup.array().required("Kindly select your preferred services").min(1, "Kindly select your preferred services"),
  // companyCountry: yup.object({
  //   label: yup.string().required("Kindly select your preferred services!"),
  //   value: yup.string().required("Kindly select your preferred services!"),
  // }).en(),
  // services: yup
  //   .object()
  //   .shape({
  //     label: yup.string().required("Kindly select your preferred services!"),
  //     value: yup.string().required("Kindly select your preferred services!"),
  //   })
  //   .nullable(),

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
  // companyAddress: yup.string().ensure().when("companyCountry", {
  //   is: "",
  //   then: yup.string().required("Kindly provide a valid mobile number!"),
  // }),
  // companyCountry: yup.string().ensure().when("companyAddress", {
  //   is: "",
  //   then: yup.string().notRequired("Kindly provide a valid mobile number!"),
  // }),
});
