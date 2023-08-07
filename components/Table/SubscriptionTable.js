"use client";

import { Table } from "antd";
import styles from "@/styles/layout.module.css";
import { FiTrash } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import {
  useGetAllMailingListQuery,
  useDeleteMailingListMutation,
} from "@/redux/services/admin/adminApiSlice";
import { Fragment } from "react";
import { toast } from "react-toastify";

const SubscriptionTable = () => {
  const { data: isData, isLoading, isFetching } = useGetAllMailingListQuery();
  const [deleteMailingList, { isLoading: isDeleteLoading }] =
    useDeleteMailingListMutation();

  const handleDeleteEntry = async (id) => {
    try {
      const res = await deleteMailingList(id);
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

  const columns = [
    {
      key: "1",
      title: "Logged IP",
      dataIndex: "logged_ip",
      render: (logged_ip) => <span>{logged_ip}</span>,
    },
    {
      key: "2",
      title: "Email address",
      dataIndex: "customer_email_address",
      render: (customer_email_address) => <span>{customer_email_address}</span>,
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

export default SubscriptionTable;
