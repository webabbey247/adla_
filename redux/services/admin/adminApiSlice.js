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
      providesTags: ["MarkUnredComplaint"],
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
} = adminApiSlice;
