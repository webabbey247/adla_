"use client";

import styles from "@/styles/layout.module.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DashboardBarChart = () => {
  const data = [
    {
      name: "Jan",
      ContactInquiry: 200,
      ServiceInquiry: 10,
      amt: 210,
    },
    {
      name: "Feb",
      ContactInquiry: 10,
      ServiceInquiry: 0,
      amt: 30,
    },
    {
      name: "Mar",
      ContactInquiry: 80,
      ServiceInquiry: 40,
      amt: 120,
    },
    {
      name: "Apr",
      ContactInquiry: 10,
      ServiceInquiry: 50,
      amt: 60,
    },
    {
      name: "May",
      ContactInquiry: 110,
      ServiceInquiry: 200,
      amt: 350,
    },
    {
      name: "Jun",
      ContactInquiry: 190,
      ServiceInquiry: 230,
      amt: 420,
    },
    {
      name: "Jul",
      ContactInquiry: 90,
      ServiceInquiry: 38,
      amt: 128,
    },
    {
      name: "Aug",
      ContactInquiry: 10,
      ServiceInquiry: 38,
      amt: 48,
    },
    {
      name: "Sept",
      ContactInquiry: 40,
      ServiceInquiry: 38,
      amt: 78,
    },
    {
      name: "Oct",
      ContactInquiry: 10,
      ServiceInquiry: 38,
      amt: 48,
    },
    {
      name: "Nov",
      ContactInquiry: 90,
      ServiceInquiry: 60,
      amt: 150,
    },
    {
      name: "Dec",
      ContactInquiry: 15,
      ServiceInquiry: 90,
      amt: 105,
    },
  ];
  return (
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div className={`mb-3 card ${styles.card}`}>
        <div className={styles.pageHeader}>
          <h5>Analytics Overview</h5>
        </div>
        <div className="card-body">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              width={650}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="ServiceInquiry" stackId="a" fill="#0e3844" />
              <Bar dataKey="ContactInquiry" stackId="a" fill="#fba543" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardBarChart;
