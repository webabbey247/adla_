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

export const getQuoteValidationSchema = yup.object().shape({
  products: yup
    .object()
    .shape({
      label: yup.string().required("Kindly select your preferred products!"),
      value: yup.string().required("Kindly select your preferred products!"),
    })
    .nullable(), // for handling null value when clearing options via clicking "x"
  // .required("Kindly select your preferred productss!"),
  productQty: yup
    .string()
    .trim()
    .required(
      "Kindly provide an estimated quantity across interested products!"
    ),
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
});

export const emailSubscriptionSchema = yup.object().shape({
  emailAddress: yup
    .string()
    .trim()
    .required("Kindly provide a valid email address!"),
});
