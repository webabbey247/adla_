"use client";

import { Fragment } from "react";
import { Table } from "antd";
import Link from "next/link";
import styles from "@/styles/layout.module.css";
import { FiEye, FiTrash } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { useGetAllQuotationsQuery } from "@/redux/services/admin/adminApiSlice";
import { toast } from "react-toastify";

const QuotationTable = () => {
  const router = useRouter();
  const { data: isData, isLoading, isFetching } = useGetAllQuotationsQuery();
  //   const [deleteComplaints, { isLoading: isDeleteLoading }] =
  //     useDeleteComplaintsMutation();

  //   const handleDeleteEntry = async (id) => {
  //     try {
  //       const res = await deleteComplaints(id);
  //       if (res?.data.success) {
  //         toast.success(res?.data.message, {
  //           position: toast.POSITION.TOP_CENTER,
  //         });
  //       } else {
  //         toast.warning(res?.data.message || res?.message, {
  //           position: toast.POSITION.TOP_CENTER,
  //         });
  //       }
  //     } catch (err) {
  //       console.log("hello error", err);
  //     }
  //   };

  const columns = [
    {
      key: "1",
      title: "Ticket ID",
      dataIndex: "customer_ticket_no",
      render: (customer_ticket_no) => <span>{customer_ticket_no}</span>,
    },
    {
      key: "2",
      title: "Full Name",
      dataIndex: "customer_full_name",
      render: (customer_full_name) => <span>{customer_full_name}</span>,
    },
    {
      key: "3",
      title: "Company Name",
      dataIndex: "customer_company_name",
      render: (customer_company_name) => <span>{customer_company_name}</span>,
    },
    {
      key: "4",
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Fragment>
          {status == 1 ? (
            <span className={styles.bg_success_light}>read</span>
          ) : (
            <span className={styles.bg_draft_light}>Unread</span>
          )}
        </Fragment>
      ),
      sorter: (record1, record2) => {
        return record1.status > record2.status;
      },
    },
    {
      key: "5",
      title: "Logged IP",
      dataIndex: "logged_ip",
      render: (logged_ip) => <span>{logged_ip}</span>,
    },
    {
      key: "6",
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
      key: "7",
      title: "Action",
      render: (record) => (
        <div className="d-flex">
          <Link
            href={`quotations/${record.customer_ticket_no}`}
            className={styles.bg_info_light}
          >
            <span>
              <FiEye className="mx-1" fontSize={18} />
              view
            </span>
          </Link>

          {/* {isDeleteLoading ? (
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
          )} */}

          <span className={styles.bg_danger_light}>
            <FiTrash className="mx-1" fontSize={18} />
            delete
          </span>
        </div>
      ),
    },
  ];

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default QuotationTable;
