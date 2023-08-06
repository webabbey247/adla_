import { createSlice } from "@reduxjs/toolkit";
import { AUTH_TOKEN_STORAGE_KEY } from "@/utils/constant";

let IS_AUTHENTICATED =
  typeof window !== "undefined"
    ? localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)
    : null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: IS_AUTHENTICATED ? IS_AUTHENTICATED : null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.data;
      state.token = action.payload.token;
      if (typeof window !== "undefined") {
        localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, action.payload.token);
      }
    },

    logOut: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export const authToken = (state) => state.auth.token;
export default authSlice.reducer;
