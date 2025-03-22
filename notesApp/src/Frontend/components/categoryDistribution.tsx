import { motion } from "framer-motion";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CategoryDistribute = [
  { name: "Jan", count: 13 },
  { name: "Feb", count: 9 },
  { name: "Mar", count: 23 },
  { name: "Apr", count: 10 },
  { name: "May", count: 3 },
  { name: "Jun", count: 7 },
  { name: "Jul", count: 44 },
  { name: "Aug", count: 15 },
  { name: "Sep", count: 23 },
  { name: "Oct", count: 12 },
  { name: "Nov", count: 4 },
  { name: "Dec", count: 6 },
];

function MonthlyDistribution() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Monthly Distribution
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={CategoryDistribute}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis
              dataKey="name"
              interval={0}
              textAnchor="end"
              tick={{ fill: "#E5E7EB", fontSize: 10 }}
            />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31 , 41 ,55 0.8)",
                borderColor: "4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type={"monotone"}
              dataKey={"count"}
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
export default MonthlyDistribution;
