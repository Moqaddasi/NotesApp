import { motion } from "framer-motion";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const categoryDistribute = [
  { name: "Daily", count: 13 },
  { name: "Weekly", count: 9 },
  { name: "Monthly", count: 23 },
  { name: "Yearly", count: 10 },
  { name: "Favorites", count: 3 },
  { name: "Archived", count: 7 },
  { name: "Quick", count: 44 },
  { name: "Work", count: 15 },
];
const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

function CategoryDistributionChart() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Category Distribution
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={categoryDistribute}
              cx={"50%"}
              cy={"50%"}
              labelLine={false}
              outerRadius={"50%"}
              fill="#8884d8"
              dataKey="count"
              label={({ name, value }) => {
                const total = categoryDistribute.reduce(
                  (sum, item) => sum + item.count,
                  0
                );
                return `${name} ${((value / total) * 100).toFixed(0)}%`;
              }}
            >
              {categoryDistribute.map((_item, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31 , 41 ,55 0.8)",
                borderColor: "4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
export default CategoryDistributionChart;
