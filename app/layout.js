"use client";

import { DM_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Footer, Loading, ToastProvider } from "@/components";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const DMSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const DynamicBootstrap = dynamic(
  () => require("bootstrap/dist/js/bootstrap.min.js"),
  { ssr: false }
);

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={DMSans.className} suppressHydrationWarning>
          <ToastProvider>
            {children}
            {/* <main className="overflow-hidden">
              <Navbar />
              {children}
              <Footer />
            </main> */}
          </ToastProvider>
        </body>
      </html>
    </Provider>
  );
}
