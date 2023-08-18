"use client";

import styles from "@/styles/layout.module.css";
import Link from "next/link";
import {
  FiActivity,
  FiDatabase,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  console.log("hello rute", pathname);
  return (
    <div className={`${styles.sidebar_navigation_container} position-relative`}>
      <div className="py-2 mx-0 mb-0">
        <div className="my-2">
          <span>Overview</span>
        </div>
        <div className="d-flex flex-lg-column">
          <Link
            passHref
            href="/administrator/dashboard"
            className={pathname === "/administrator/dashboard" ? "active" : ""}
          >
            <FiActivity fontSize="22px" />
            <span className="ml-3">Dashboard</span>
          </Link>
        </div>
      </div>

      <div className="py-2 mx-0 mb-0">
        <div className="my-2">
          <span>Website Configurations</span>
        </div>
        <div className="d-flex flex-lg-column">
          <Link className="" href="/administrator/frequently-asked-questions">
            <FiHelpCircle color="var(--sidebar-nav-color)" fontSize="22px" />
            <span>FAQs</span>
          </Link>
        </div>
        <div className="d-flex flex-lg-column">
          <Link className="" href="/administrator/site-configurations" passHref>
            <FiSettings color="var(--sidebar-nav-color)" fontSize="22px" />
            <span>Settings</span>
          </Link>
        </div>
      </div>

      <div className="py-2 mx-0 mb-0">
        <div className="my-2">
          <span>Messages</span>
        </div>

        <div className="d-flex flex-lg-column">
          <Link className="" href="/administrator/enquiries" passHref>
            <FiDatabase color="var(--sidebar-nav-color)" fontSize="22px" />
            <span>Contact Inquiries</span>
          </Link>
        </div>

        <div className="d-flex flex-lg-column">
          <Link className="" href="/administrator/quotations" passHref>
            <FiDatabase color="var(--sidebar-nav-color)" fontSize="22px" />
            <span>Services Inquiry</span>
          </Link>
        </div>
        <div className="d-flex flex-lg-column">
          <Link className="" href="/administrator/subscriptions" passHref>
            <FiDatabase color="var(--sidebar-nav-color)" fontSize="22px" />
            <span>Email Subscriptions</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
