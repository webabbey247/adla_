import { apiSlice } from "@/redux/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    getAuthenticatedUser: builder.query({
      query: () => "/user",
      providesTags: ["AuthenticatedUser"],
    }),
    logOut: builder.query({
      query: () => "/logout",
    }),
  }),
});

export const {
  useLoginUserMutation,
  useGetAuthenticatedUserQuery,
  useLazyLogOutQuery,
} = authApiSlice;
