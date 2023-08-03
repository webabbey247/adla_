import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  credentials: "same-origin",
  prepareHeaders: (headers) => {
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
