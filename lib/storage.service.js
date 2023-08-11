import { AUTH_TOKEN_STORAGE_KEY } from "@/utils/constant";

export const StorageService = {
  setToken: async (token) => {
    localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
  },
  getToken: () => {
    return localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
  },
  clear: () => {
    return localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
  },
};
