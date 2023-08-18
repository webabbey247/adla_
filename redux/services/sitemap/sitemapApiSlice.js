import { apiSlice } from "../../api/apiSlice";

export const sitemapApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allFaqs: builder.query({
      query: () => "faqs/all",
      providesTags: ["AllFaqs"],
    }),
    getWebsiteConfiguration: builder.query({
      query: () => "configurations/all",
      providesTags: ["WebsiteConfig"],
    }),
    contactUs: builder.mutation({
      query: (credentials) => ({
        url: "enquiries/contact-us",
        method: "post",
        body: credentials,
      }),
    }),
    servicesQuotation: builder.mutation({
      query: (credentials) => ({
        url: "services/request-quote",
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

export const {
  useAllFaqsQuery,
  useGetWebsiteConfigurationQuery,
  useContactUsMutation,
  useEmailSubscriptionMutation,
  useServicesQuotationMutation,
} = sitemapApiSlice;
