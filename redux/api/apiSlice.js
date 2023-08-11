import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut } from "../services/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL,
  // baseUrl: process.env.NEXT_PUBLIC_LOCAL_BASE_URL,
  credentials: "same-origin",
  headers: {
    Accept: "application/json",
  },
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
      headers.set("Content-Type", "application/json");
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  result?.error?.originalStatus === 403 || result?.error?.originalStatus === 401
    ? api.dispatch(logOut())
    : result?.error?.originalStatus === 404
    ? console.log("Enpoint not found")
    : console.log("Enpoint error", result?.error);
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: [
    "Complaints",
    "SingleComplaint",
    "UnreadComplaint",
    "ServiceQuotations",
    "SingleQuotation",
    "UnreadQuotation",
    "websiteConfiguration",
    "WebsiteConfig",
    "getAllMailingList",
    "Subscribers",
  ],
  endpoints: (builder) => ({}),
});
