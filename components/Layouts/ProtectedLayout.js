// "use client";

import { Fragment } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { UN_AUTHENTICATED } from "@/utils/constant";
import { useSelector } from "react-redux";
import styles from "@/styles/layout.module.css";
import { FiPower } from "react-icons/fi";
import Sidebar from "../Sidebar";

const ProtectedLayout = ({ children }) => {
  // const { token } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   !token || token === null || token == ""
  //     ? setTimeout(() => router.push(UN_AUTHENTICATED), 100)
  //     : null;
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [token]);

  return (
    <main className="overflow-hidden">
      <div className={`${styles.dashboard_container} w-100 d-flex`}>
        <div
          className={`${styles.dashboard_sidebar} d-flex flex-column vh-100`}
        >
          <div className="container-fluid px-0">
            <div
              className={`${styles.sidebar_container} position-absolute d-flex flex-column w-100 overflow-hidden h-100`}
            >
              <div
                className={`${styles.navigation_header} d-flex align-items-lg-center w-100`}
              >
                <div className="justify-content-lg-center d-flex align-items-lg-center" />
                <Image
                  src="/static/logo.png"
                  width={100}
                  height={90}
                  alt="Adla Logo"
                />
              </div>
              <Sidebar />
              <div
                className={`${styles.navigation_footer} d-flex justify-content-lg-between`}
              >
                <div className="d-flex justify-content-lg-start">
                  <Image
                    src="/static/profile-icon.png"
                    width={50}
                    height={50}
                    alt="hello"
                  />
                  <div className={`${styles.user_info} d-flex flex-lg-column`}>
                    <Fragment>
                      <span className="text-capitalize">Adla Investments</span>
                      <span>Administrator</span>
                    </Fragment>
                  </div>
                </div>

                <div className={styles.user_logged_info}>
                  <span className="cursor-pointer">
                    <FiPower
                      className="cursor-pointer"
                      color="var(--adlas-color-white)"
                      fontSize="22px"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.main_container} w-100`}>
          <div className="container-fluid">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default ProtectedLayout;
