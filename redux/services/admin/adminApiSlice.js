import { apiSlice } from "@/redux/api/apiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
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
    markUnreadComplaints: builder.query({
      query: (tickekID) => `unread/contact-form-inquiries/${tickekID}`,
      providesTags: ["UnreadComplaint"],
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
    markUnreadQuotation: builder.query({
      query: (tickekID) => `unread/services/quotations/${tickekID}`,
      providesTags: ["UnreadQuotation"],
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
  useGetAllComplaintsQuery,
  useGetSingleComplaintQuery,
  useLazyMarkUnreadComplaintsQuery,
  useDeleteComplaintsMutation,
  useGetAllMailingListQuery,
  useDeleteMailingListMutation,
  useGetAllQuotationsQuery,
  useGetSingleQuotationQuery,
  useLazyMarkUnreadQuotationQuery,
  useDeleteQuotationMutation,
  useGetWebsiteConfigQuery,
  useUpdateWebsiteConfigMutation,
  useUpdateUserPasswordMutation,
} = adminApiSlice;
