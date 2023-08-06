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

const DashboardPieChart = () => {
  const data = [
    {
      name: "Jan",
      Complaints: 200,
      Appointments: 10,
      amt: 210,
    },
    {
      name: "Feb",
      Complaints: 10,
      Appointments: 0,
      amt: 30,
    },
    {
      name: "Mar",
      Complaints: 80,
      Appointments: 40,
      amt: 120,
    },
    {
      name: "Apr",
      Complaints: 10,
      Appointments: 50,
      amt: 60,
    },
    {
      name: "May",
      Complaints: 110,
      Appointments: 200,
      amt: 350,
    },
    {
      name: "Jun",
      Complaints: 190,
      Appointments: 230,
      amt: 420,
    },
    {
      name: "Jul",
      Complaints: 90,
      Appointments: 38,
      amt: 128,
    },
    {
      name: "Aug",
      Complaints: 10,
      Appointments: 38,
      amt: 48,
    },
    {
      name: "Sept",
      Complaints: 40,
      Appointments: 38,
      amt: 78,
    },
    {
      name: "Oct",
      Complaints: 10,
      Appointments: 38,
      amt: 48,
    },
    {
      name: "Nov",
      Complaints: 90,
      Appointments: 60,
      amt: 150,
    },
    {
      name: "Dec",
      Complaints: 15,
      Appointments: 90,
      amt: 105,
    },
  ];
  return (
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div className={`mb-3 card ${styles.card}`}>
        <div className={styles.pageHeader}>
          <h5>Analytics</h5>
        </div>
        <div className="card-body">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              width={650}
              height={300}
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
              <Bar dataKey="Appointments" stackId="a" fill="#262261" />
              <Bar dataKey="Complaints" stackId="a" fill="#0ebbfa" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardPieChart;
