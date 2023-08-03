import { apiSlice } from "../api/apiSlice";

export const sitemapApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    contactUs: builder.mutation({
      query: (credentials) => ({
        url: "enquiries/contact-us",
        method: "post",
        body: credentials,
      }),
    }),
    emailSubscription: builder.mutation({
      query: (credentials) => ({
        url: "mailing-list/subscribers",
        method: "post",
        body: credentials,
      }),
    }),
  }),
});

export const { useContactUsMutation, useEmailSubscriptionMutation } =
  sitemapApiSlice;
