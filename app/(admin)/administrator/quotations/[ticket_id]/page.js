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
  useGetSingleQuotationQuery,
  useDeleteQuotationMutation,
  useLazyMarkUnreadQuotationQuery,
} from "@/redux/services/admin/adminApiSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastService } from "@/lib/toast.service";

const QuotationSinglePage = ({ params }) => {
  const router = useRouter();
  const {
    data: isData,
    isLoading,
    isFetching,
  } = useGetSingleQuotationQuery(params.ticket_id);

  const [deleteQuotation, { isLoading: isDeleteLoading }] =
    useDeleteQuotationMutation();

  const [
    markUnreadQuotation,
    { isLoading: isDraftLoading, isFetching: isDraftFetching },
  ] = useLazyMarkUnreadQuotationQuery();

  const handleDeleteEntry = async (id) => {
    try {
      const res = await deleteQuotation(id);
      if (res?.data.success) {
        ToastService.success(res?.data.message);
        setTimeout(() => router.push("/administrator/quotations"), 200);
      } else {
        ToastService.error(res?.data.message || res?.message);
      }
    } catch (err) {
      console.log("hello error", err);
    }
  };

  const handleUnreadEntry = async (ticketID) => {
    try {
      const res = await markUnreadQuotation(ticketID);
      if (res?.data.success) {
        ToastService.success(res?.data.message);
        setTimeout(() => router.push("/administrator/quotations"), 200);
      } else {
        ToastService.error(res?.data.message || res?.message);
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
              <div className={`card ${styles.card} mb-3`}>
                <div
                  className={`${styles.page_header} d-flex flex-column flex-wrap`}
                >
                  <Link
                    href="/administrator/quotations"
                    className={styles.back_to_nav}
                  >
                    <FiArrowLeft fontSize={20} />
                    Back to quotations
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
                    <div class="row ">
                      <div class="col-lg-12 col-md-12">
                        <div className={styles.content_display_child}>
                          {/* <p className="mb-lg-2">Interested Services</p> */}
                          <span>Interested Services</span>
                          <br className="mb-lg-3" />
                          {isData?.data.quotation_inquiries.map(
                            (_data, index) => {
                              return (
                                <small key={index} className="badge-light">
                                  {_data.service_name}
                                </small>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className={styles.content_display_child}>
                          <span>Full Name</span>
                          <p>{isData?.data.customer_full_name}</p>
                        </div>
                      </div>

                      {/* <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={styles.content_display_child}>
                          <span> Email Address</span>
                          <p>{isData?.data.customer_email_address}</p>
                        </div>
                      </div> */}

                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className={styles.content_display_child}>
                          <span>Mobile Number</span>
                          <p>{isData?.data.customer_mobile_number}</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className={styles.content_display_child}>
                          <span>Logged IP</span>
                          <p>{isData?.data.logged_ip}</p>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-6 col-sm-12">
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

                    <div className="row">
                      <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className={styles.content_display_child}>
                          <span>Company Name</span>
                          <p>{isData?.data.customer_company_name}</p>
                        </div>
                      </div>

                      <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className={styles.content_display_child}>
                          <span>Company Address?</span>
                          <p>{isData?.data.customer_company_address || "-"}</p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className={styles.content_display_child}>
                          <span>Customer Notes / Quotes</span>
                          <p
                            className="mx-0 my-0"
                            dangerouslySetInnerHTML={{
                              __html: isData?.data.customer_notes,
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-lg-4">
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

                      <div className="col-lg-8 col-md-12 col-sm-12">
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
                                  className="spinner-border text-light spinner-border-sm"
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

                    {/* <div className="row mt-lg-3">
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
                    </div> */}
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

export default QuotationSinglePage;
