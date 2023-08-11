import { createSlice } from "@reduxjs/toolkit";

const sitemapSlice = createSlice({
  name: "sitemap",
  initialState: {
    isLoading: true,
    isFetching: true,
    mobileNumber: null,
    emailAddress: null,
    companyAddress: null,
    instagramHandle: null,
    twitterHandle: null,
    linkedinHandle: null,
    facebookHandle: null,
  },
  reducers: {
    setWebsiteConfig: (state, action) => {
      state.isLoading = false;
      state.isFetching = false;
      state.mobileNumber = action.payload.mobile_number;
      state.emailAddress = action.payload.email_address;
      state.companyAddress = action.payload.company_address;
      state.instagramHandle = action.payload.instagram_handle;
      state.twitterHandle = action.payload.twitter_handle;
      state.linkedinHandle = action.payload.linkedin_handle;
      state.facebookHandle = action.payload.facebook_handle;
    },
  },
});

export const { setWebsiteConfig } = sitemapSlice.actions;
export default sitemapSlice.reducer;
