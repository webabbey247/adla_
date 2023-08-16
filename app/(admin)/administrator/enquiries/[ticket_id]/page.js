"use client";

import { Fragment } from "react";
import { ProtectedLayout, ContactUsTable } from "@/components";
import styles from "@/styles/layout.module.css";
import {
  FiEye,
  FiShield,
  FiThumbsDown,
  FiThumbsUp,
  FiTrash,
  FiArrowLeft,
} from "react-icons/fi";
import { format } from "date-fns";
import {
  useGetSingleComplaintQuery,
  useDeleteComplaintsMutation,
  useLazyMarkUnreadComplaintsQuery,
} from "@/redux/services/admin/adminApiSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import SeoCard from "@/components/Cards/SeoCard";

const EnquiriesSinglePage = ({ params }) => {
  const router = useRouter();
  const {
    data: isData,
    isLoading,
    isFetching,
  } = useGetSingleComplaintQuery(params.ticket_id);

  const [deleteComplaints, { isLoading: isDeleteLoading }] =
    useDeleteComplaintsMutation();

  const [
    markUnreadComplaints,
    { isLoading: isDraftLoading, isFetching: isDraftFetching },
  ] = useLazyMarkUnreadComplaintsQuery();

  const handleDeleteEntry = async (id) => {
    try {
      const res = await deleteComplaints(id);
      if (res?.data.success) {
        toast.success(res?.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => router.push("/administrator/enquiries"), 200);
      } else {
        toast.warning(res?.data.message || res?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      console.log("hello error", err);
    }
  };

  const handleUnreadEntry = async (ticketID) => {
    try {
      const res = await markUnreadComplaints(ticketID);
      if (res?.data.success) {
        toast.success(res?.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => router.push("/administrator/enquiries"), 200);
      } else {
        toast.warning(res?.data.message || res?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      console.log("hello error", err);
    }
  };

  return (
    <ProtectedLayout>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          {isLoading || isFetching ? (
            <div className="d-flex align-items-center justify-content-center align-content-center">
              <span
                className="spinner-border spinner-border-lg"
                role="status"
                aria-hidden="true"
              />
            </div>
          ) : (
            <Fragment>
              {/* <SeoCard title={`Customer Ticket_ID: ${isData?.data.customer_ticket_no}) }`} description="" /> */}
              <title>Customer Ticket_ID: {isData?.data.customer_ticket_no} | Adla Global Business</title>
              <meta name="description" content="" />
              <div className={`card ${styles.card} mb-3`}>
                <div
                  className={`${styles.page_header} d-flex flex-column flex-wrap`}
                >
                  <Link
                    href="/administrator/enquiries"
                    className={styles.back_to_nav}
                  >
                    <FiArrowLeft fontSize={20} />
                    Back to enquiries
                  </Link>
                  <div className="d-flex flex-row my-lg-3">
                    <span
                      className={`${styles.bg_success_light} align-items-center d-flex justify-content-center`}
                    >
                      {(isData?.data.customer_email_address).slice(0, 1)}
                    </span>
                    <h4>{isData?.data.customer_email_address}</h4>
                  </div>
                  <p>Customer Ticket_ID: {isData?.data.customer_ticket_no} </p>
                </div>

                <div className="card-body p-0">
                  <div className={styles.content_display_info}>
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className={styles.content_display_child}>
                          <span>Full Name</span>
                          <p>{isData?.data.customer_full_name}</p>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={styles.content_display_child}>
                          <span> Email Address</span>
                          <p>{isData?.data.customer_email_address}</p>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className={styles.content_display_child}>
                          <span>Mobile Number</span>
                          <p>{isData?.data.customer_mobile_number}</p>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-12">
                        <div className={styles.content_display_child}>
                          <span>Logged IP</span>
                          <p>{isData?.data.logged_ip}</p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className={styles.content_display_child}>
                          <span>How did you hear about Adla?</span>
                          <p>{isData?.data.hear_about_us}</p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className={styles.content_display_child}>
                          <span>Complaint / Inquiry</span>
                          <p
                            className="mx-0 my-0"
                            dangerouslySetInnerHTML={{
                              __html: isData?.data.customer_enquiries,
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={styles.content_display_child}>
                          <span>Status</span>
                          <p className="mt-2">
                            {isData?.data.status !== 1 ? (
                              <span className={styles.bg_draft_light}>
                                Unread
                              </span>
                            ) : (
                              <span className={styles.bg_success_light}>
                                Read
                              </span>
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={styles.content_display_child}>
                          <span>Logged IP</span>
                          <p>{isData?.data.logged_ip}</p>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={styles.content_display_child}>
                          <span>Entry Date</span>
                          <p>
                            {format(
                              new Date(isData?.data.created_at),
                              "yyyy-mm-dd hh:mm:ss"
                            )}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-lg-3">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className={`${styles.content_display_child} pb-4`}>
                          <span>Action</span>
                          <div className="d-flex mt-2">
                            {isDeleteLoading ? (
                              <span className={styles.bg_danger_light}>
                                <span
                                  className="spinner-border spinner-border-sm mr-4"
                                  role="status"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : (
                              <span
                                className={styles.bg_danger_light}
                                onClick={() =>
                                  handleDeleteEntry(isData?.data.id)
                                }
                              >
                                <FiTrash className="mr-4" />
                                Delete
                              </span>
                            )}

                            {isDraftFetching || isDraftLoading ? (
                              <span className={styles.bg_draft_light}>
                                <span
                                  className="spinner-border spinner-border-sm mr-4 text-white"
                                  role="status"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : (
                              <span
                                onClick={() =>
                                  handleUnreadEntry(
                                    isData?.data.customer_ticket_no
                                  )
                                }
                                className={`${styles.action} ${styles.bg_draft_light}`}
                              >
                                <FiThumbsUp className="mr-4" />
                                Mark as unread
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </ProtectedLayout>
  );
};

export default EnquiriesSinglePage;
