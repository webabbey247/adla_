import styles from "@/styles/layout.module.css";
import {
  CartesianGrid,
  LineChart,
  Tooltip,
  Line,
  ResponsiveContainer,
  XAxis,
} from "recharts";
const DashboardLineChart = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      amt: 2400,
    },
    {
      name: "Mar",
      uv: 3000,
      amt: 2210,
    },
    {
      name: "Jun",
      uv: 2000,
      amt: 2290,
    },
    {
      name: "Aug",
      uv: 2780,
      amt: 2000,
    },
    {
      name: "Oct",
      uv: 1890,
      amt: 2181,
    },
    {
      name: "Dec",
      uv: 2390,
      amt: 2500,
    },
  ];

  return (
    <div className="col-lg-6 col-md-12 col-sm-12">
      <div className={`mb-3 card ${styles.card}`}>
        <div className="card-body">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              width={316}
              height={196}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              style={{
                background: " #ffffff",
                border: "1px solid #ffffff",
                borderRadius: "3px",
                paddingTop: "5px",
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#78a5c8" />
              <XAxis dataKey="name" />
              <Tooltip />
              <Line type="monotone" dataKey="uv" stroke="#262261" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardLineChart;
