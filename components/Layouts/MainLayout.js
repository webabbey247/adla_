"use client";

import Navbar from "../Navbar";
import Footer from "../Footer";
import { useGetWebsiteConfigurationQuery } from "@/redux/services/sitemap/sitemapApiSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setWebsiteConfig } from "@/redux/services/sitemap/sitemapSlice";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const {
    data: isWebConfigData,
    isLoading,
    isFetching,
  } = useGetWebsiteConfigurationQuery();


  useEffect(() => {
    if (!isLoading || !isFetching) {
      dispatch(setWebsiteConfig(isWebConfigData?.data));
      console.log("hello web info", isWebConfigData?.data);
    }
  }, [isWebConfigData, isLoading, isFetching, dispatch]);

  return (
    <main className="overflow-hidden">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
