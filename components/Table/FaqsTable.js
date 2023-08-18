"use client";

import { Table } from "antd";
import Link from "next/link";
import styles from "@/styles/layout.module.css";
import { FiTrash, FiEye, FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { format } from "date-fns";
import {
  useGetAllFaqsQuery,
  useDeleteSingleFaqMutation,
  useDraftSingleFaqMutation,
  useApproveSingleFaqMutation,
} from "@/redux/services/admin/adminApiSlice";
import { Fragment, useEffect } from "react";
import { toast } from "react-toastify";

const FaqsTable = () => {
  const { data: isData, isLoading, isFetching } = useGetAllFaqsQuery();
  const [deleteSingleFaq, { isLoading: isDeleteLoading }] =
    useDeleteSingleFaqMutation();

  const [draftSingleFaq, { isLoading: isDraftLoading }] =
    useDraftSingleFaqMutation();

  const [approveSingleFaq, { isLoading: isApproveLoading }] =
    useApproveSingleFaqMutation();

  const handleDraftEntry = async (id) => {
    try {
      const res = await draftSingleFaq(id);
      if (res?.data.success) {
        toast.success(res?.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.warning(res?.data.message || res?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      console.log("hello error", err);
    }
  };

  const handleApproveEntry = async (id) => {
    try {
      const res = await approveSingleFaq(id);
      if (res?.data.success) {
        toast.success(res?.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.warning(res?.data.message || res?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      console.log("hello error", err);
    }
  };

  const handleDeleteEntry = async (id) => {
    try {
      const res = await deleteSingleFaq(id);
      if (res?.data.success) {
        toast.success(res?.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.warning(res?.data.message || res?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      console.log("hello error", err);
    }
  };

  useEffect(() => {}, [isData, isLoading, isFetching]);

  const columns = [
    {
      key: "1",
      title: "Questions",
      dataIndex: "possible_question",
      render: (possible_question) => <span>{possible_question}</span>,
    },
    {
      key: "2",
      title: "Logged IP",
      dataIndex: "logged_ip",
      render: (logged_ip) => <span>{logged_ip}</span>,
    },

    {
      key: "3",
      title: "Entry Date",
      dataIndex: "created_at",
      render: (created_at) => (
        <span>{format(new Date(created_at), "yyyy-mm-dd hh:mm:ss")}</span>
      ),
      sorter: (record1, record2) => {
        return record1.created_at > record2.created_at;
      },
    },
    {
      key: "4",
      title: "Action",
      render: (record) => (
        <Fragment>
          <div className="d-flex">
            <Link
              href={`frequently-asked-questions/${record.slug}`}
              className={styles.bg_info_light}
            >
              <span>
                <FiEye className="mx-1" fontSize={18} />
                view
              </span>
            </Link>

            {record.status == 1 ? (
              isDraftLoading ? (
                <span className={styles.bg_draft_light}>
                  <span
                    className="spinner-border spinner-border-sm mr-4"
                    role="status"
                    aria-hidden="true"
                  />
                </span>
              ) : (
                <span
                  className={styles.bg_draft_light}
                  onClick={() => handleDraftEntry(record.id)}
                >
                  <FiThumbsDown className="mx-1" fontSize={18} />
                  Draft
                </span>
              )
            ) : isApproveLoading ? (
              <span className={styles.bg_success_light}>
                <span
                  className="spinner-border spinner-border-sm mr-4"
                  role="status"
                  aria-hidden="true"
                />
              </span>
            ) : (
              <span
                className={styles.bg_success_light}
                onClick={() => handleApproveEntry(record.id)}
              >
                <FiThumbsUp className="mx-1" fontSize={18} />
                Approve
              </span>
            )}

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
                onClick={() => handleDeleteEntry(record.id)}
              >
                <FiTrash className="mx-1" fontSize={18} />
                delete
              </span>
            )}
          </div>
        </Fragment>
      ),
    },
  ];

  return (
    <div className={`table-responsive ${styles.dataTable}`}>
      <Table
        loading={isLoading || isFetching}
        columns={columns}
        dataSource={isData?.data}
        pagination={{
          pageSize: 20,
        }}
      />
    </div>
  );
};

export default FaqsTable;
