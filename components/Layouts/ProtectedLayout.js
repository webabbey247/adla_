"use client";

import { Fragment, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { UN_AUTHENTICATED } from "@/utils/constant";
import { useSelector, useDispatch } from "react-redux";
import styles from "@/styles/layout.module.css";
import { FiLoader, FiPower } from "react-icons/fi";
import Sidebar from "../Sidebar";
import { useLazyLogOutQuery } from "@/redux/services/auth/authApiSlice";
import { ToastService } from "@/lib/toast.service";
import { logOut } from "@/redux/services/auth/authSlice";

const ProtectedLayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { token } = useSelector((state) => state.auth);
  // const [logOut, { data: isLogOutData, isLoading, isFetching }] =
  //   useLazyLogOutQuery();

  // const handleLogout = async () => {
  //   try {
  //     const logOutRes = await logOut();
  //     return logOutRes;
  //   } catch (err) {
  //     console.log("hello error", err);
  //   }
  // };

  useEffect(() => {
    !token || token === null || token == ""
      ? setTimeout(() => router.push(UN_AUTHENTICATED), 100)
      : null;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  // useEffect(
  //   () => {
  //     !token || token === null || token == ""
  //       ? setTimeout(() => router.push(UN_AUTHENTICATED), 100)
  //       : null;

  //     if (isError) {
  //       ToastService.error(error?.data.message || error?.message);
  //     }
  //     if (isSuccess) {
  //       dispatch(logOut);
  //       ToastService.success(isLogOutData?.message);
  //     }
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [token, isLogOutData, isError, isSuccess, error]
  // );

  return (
    <main className="overflow-hidden">
      <div className={`${styles.dashboard_container} w-100 d-flex`}>
        <div className="container-fluid px-0">
          <div
            className={`${styles.dashboard_sidebar} d-flex flex-column vh-100`}
          >
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
                  {/* <span
                    className="cursor-pointer"
                    onClick={() => handleLogout()}
                  >
                    {isLoading ? (
                      <span
                        className="spinner-border spinner-border-sm mr-4"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      // <FiLoader
                      //   className="cursor-pointer"
                      //   color="var(--adlas-color-white)"
                      //   fontSize="22px"
                      // />
                      <FiPower
                        className="cursor-pointer"
                        color="var(--adlas-color-white)"
                        fontSize="22px"
                      />
                    )}
                  </span> */}
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.main_container} w-100`}>
            <div className="container-fluid">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProtectedLayout;
