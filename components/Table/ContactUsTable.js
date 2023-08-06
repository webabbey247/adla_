"use client";

import { Fragment } from "react";
import { Table } from "antd";
import Link from "next/link";
import styles from "@/styles/layout.module.css";
import { FiEye, FiTrash } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

const ContactUsTable = ({ isData, isDataFetching, isDataLoading }) => {
  const router = useRouter();
  const columns = [
    {
      key: "1",
      title: "Ticket ID",
      dataIndex: "reference_id",
      //   render: (reference_id) => <span>{reference_id}</span>,
    },
    {
      key: "2",
      title: "Subject",
      dataIndex: "subject",
      //   render: (subject) => <span>{subject}</span>,
    },
    {
      key: "3",
      title: "Status",
      dataIndex: "status",
      //   render: (status) => (
      //     <Fragment>
      //       {status !== 1 ? (
      //         <span className={styles.bgDraftLight}>Unread</span>
      //       ) : (
      //         <span className={styles.bgSuccessLight}>read</span>
      //       )}
      //     </Fragment>
      //   ),
      //   sorter: (record1, record2) => {
      //     return record1.status > record2.status;
      //   },
    },
    {
      key: "4",
      title: "Logged IP",
      dataIndex: "logged_ip",
      //   render: (logged_ip) => <span>{logged_ip}</span>,
    },
    {
      key: "5",
      title: "Entry Date",
      dataIndex: "created_at",
      //   render: (created_at) => (
      //     <span>{format(new Date(created_at), "yyyy-mm-dd hh:mm:ss")}</span>
      //   ),
      //   sorter: (record1, record2) => {
      //     return record1.created_at > record2.created_at;
      //   },
    },
    {
      key: "6",
      title: "Action",
      render: () => (
        <div className="d-flex">
          <Link href="/" className={styles.bgDraftLight}>
            <FiEye className="mr-4" />
          </Link>
          <span className={styles.bgDangerLight}>
            <FiTrash />
          </span>
        </div>
      ),
    },
  ];

  return (
    <Fragment>
      <div className={`table-responsive ${styles.dataTable}`}>
        <Table
          //   loading={isDataLoading || isDataFetching || isLoading}
          columns={columns}
          dataSource={[]}
          pagination={{
            pageSize: 20,
          }}
        />
      </div>
    </Fragment>
  );
};

export default ContactUsTable;
