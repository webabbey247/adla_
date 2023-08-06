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
  // companyAddress: yup.string().notRequired,
  // companyCountry: yup.object({
  //   value: yup.string().required("Please select a gender"),
  //   label: yup.string().required("Please select a gender"),
  // }),

  // companyCountry: yup.object().when("companyAddress", {
  //   is: (companyAddress) => companyAddress !== "",
  //   then: () =>
  //     yup.object({
  //       label: yup.string().required("Kindly select location of your company"),
  //       value: yup.string().required("Kindly select location of your company"),
  //     }),
  //   otherwise: () => yup.object({
  //     label: yup.string().notRequired(),
  //     value: yup.string().notRequired(),
  //   }),
  // }),
  // companyCountry: yup.object({
  //   value: yup.string().when("companyAddress", {
  //     is: (companyAddress) => companyAddress !== "",
  //     then: () =>
  //     yup.object({
  //       label: yup.string().required("Kindly select location of your company"),
  //       value: yup.string().required("Kindly select location of your company")
  //     }),
  //     otherwise: () =>
  //     yup.object()
  //     // then: (schema) =>
  //     //   schema.required("Kindly select location of your company"),
  //     // otherwise: (schema) => schema.notRequired(),
  //   }),
  // }),
  // companyCountry: yup
  //   .string()
  //   .ensure()
  //   .when("companyAddress", {
  //     is: "",
  //     then: yup.string().notRequired(),
  //     otherwise: yup
  //       .string()
  //       .required('"Kindly select location of your company!"'),
  //   }),
  // surname: yup.string().ensure().when('first_name', {
  //   is: '',
  //   then: yup.string().required(),
  //   otherwise: yup.string().required()
  // })
  // companyAddress: yup.string().ensure().when("companyCountry", {
  //   is: "",
  //   then: yup.string().required("Kindly provide a valid mobile number!"),
  // }),
  // companyCountry: yup.string().ensure().when("companyAddress", {
  //   is: "",
  //   then: yup.string().notRequired("Kindly provide a valid mobile number!"),
  // }),
});
