import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  credentials: "same-origin",
  // credentials: "include",
  headers: {
    Accept: "application/json",
    ContentType: "application/json",
  },
  prepareHeaders: (headers) => {
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json");
    return headers;
  },
  // prepareHeaders: (headers, { getState }) => {
  //   const token = getState().auth.token;
  //   if (token) {
  //     headers.set("authorization", `Bearer ${token}`);
  //   }
  //   return headers;
  // },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: [
    "Complaints, getAllMailingList",
    "Subscribers",
    "SingleComplaint",
    "MarkUnredComplaint",
  ],
  endpoints: (builder) => ({}),
});
