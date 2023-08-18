import { apiSlice } from "@/redux/api/apiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Faqs Form
    getAllFaqs: builder.query({
      query: () => "faqs",
      providesTags: ["AllFAQS"],
      refetchOnMountOrArgChange: true,
    }),
    getSingleFaq: builder.query({
      query: (slug) => `/faqs/${slug}`,
      providesTags: ["SingleFaq"],
      refetchOnMountOrArgChange: true,
    }),
    approveSingleFaq: builder.mutation({
      query: (id) => ({
        url: `approve/faqs/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["AllFAQS"],
    }),

    draftSingleFaq: builder.mutation({
      query: (id) => ({
        url: `draft/faqs/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["AllFAQS"],
    }),
    newSingleFaq: builder.mutation({
      query: (credentials) => ({
        url: "faqs/post",
        method: "post",
        body: credentials,
      }),
      invalidatesTags: ["AllFAQS"],
    }),
    updateSingleFaq: builder.mutation({
      query: ({ slug, ...credentials }) => ({
        url: `/update/faqs/${slug}/post`,
        method: "post",
        body: credentials,
      }),
      invalidatesTags: ["AllFAQS"],
    }),
    deleteSingleFaq: builder.mutation({
      query: (id) => ({
        url: `delete/faqs/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["AllFAQS"],
    }),
    //Contact Us Form
    getAllComplaints: builder.query({
      query: () => "contact-form-inquiries",
      providesTags: ["Complaints"],
      refetchOnMountOrArgChange: true,
    }),
    getSingleComplaint: builder.query({
      query: (tickekID) => `contact-form-inquiries/${tickekID}`,
      providesTags: ["SingleComplaint"],
    }),
    // markUnreadComplaints: builder.query({
    //   query: (tickekID) => `unread/contact-form-inquiries/${tickekID}`,
    //   providesTags: ["UnreadComplaint"],
    // }),
    markUnreadComplaints: builder.mutation({
      query: (tickekID) => ({
        url: `unread/contact-form-inquiries/${tickekID}`,
        method: "POST",
      }),
      invalidatesTags: ["Complaints"],
    }),
    deleteComplaints: builder.mutation({
      query: (id) => ({
        url: `delete/contact-form-inquiries/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["Complaints"],
    }),
    //Subscription Form
    getAllMailingList: builder.query({
      query: () => "mailing-list/subscribers",
      providesTags: ["Subscribers"],
    }),
    deleteMailingList: builder.mutation({
      query: (id) => ({
        url: `delete/mailing-list/subscribers/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["Subscribers"],
    }),
    //Services Quotations
    getAllQuotations: builder.query({
      query: () => "services/quotations",
      providesTags: ["ServiceQuotations"],
      refetchOnMountOrArgChange: true,
    }),
    getSingleQuotation: builder.query({
      query: (tickekID) => `services/quotations/${tickekID}`,
      providesTags: ["SingleQuotation"],
    }),
    markUnreadQuotation: builder.mutation({
      query: (tickekID) => ({
        url: `unread/services/quotations/${tickekID}`,
        method: "POST",
      }),
      invalidatesTags: ["ServiceQuotations"],
    }),
    deleteQuotation: builder.mutation({
      query: (id) => ({
        url: `delete/services/quotations/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["ServiceQuotations"],
    }),
    //Website Configurations
    getWebsiteConfig: builder.query({
      query: () => "configurations",
      providesTags: ["websiteConfiguration"],
      refetchOnMountOrArgChange: true,
    }),
    updateWebsiteConfig: builder.mutation({
      query: (credentials) => ({
        url: "configurations/post",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["websiteConfiguration"],
    }),
    updateUserPassword: builder.mutation({
      query: (credentials) => ({
        url: "configurations/password/post",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useGetAllFaqsQuery,
  useGetSingleFaqQuery,
  useApproveSingleFaqMutation,
  useDraftSingleFaqMutation,
  // useLazyDraftSingleFaqQuery,
  // useLazyApproveSingleFaqQuery,
  useNewSingleFaqMutation,
  useUpdateSingleFaqMutation,
  useDeleteSingleFaqMutation,
  useGetAllComplaintsQuery,
  useGetSingleComplaintQuery,
  useMarkUnreadComplaintsMutation,
  // useLazyMarkUnreadComplaintsQuery,
  useDeleteComplaintsMutation,
  useGetAllMailingListQuery,
  useDeleteMailingListMutation,
  useGetAllQuotationsQuery,
  useGetSingleQuotationQuery,
  useMarkUnreadQuotationMutation,
  // useLazyMarkUnreadQuotationQuery,
  useDeleteQuotationMutation,
  useGetWebsiteConfigQuery,
  useUpdateWebsiteConfigMutation,
  useUpdateUserPasswordMutation,
} = adminApiSlice;
