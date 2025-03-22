import { motion } from "framer-motion";
import Header from "../../components/header";
import InfoCard from "../../components/InfoCard";
import { Archive, FileText, Star, Trash } from "lucide-react";
import QuickNotes from "../../components/quickNotes";
import MonthlyDistribution from "../../components/categoryDistribution";
import CategoryDistributionChart from "../../components/categoryDistributionChart";

function Home() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Home" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <InfoCard
            title="All Notes "
            icon={FileText}
            color="#6366F1"
            value="12"
          />
          <InfoCard title="Favorites" icon={Star} color="#8B5CF6" value="5" />
          <InfoCard title="Archived" icon={Archive} color="#EC4899" value="3" />
          <InfoCard title="Trash" icon={Trash} color="#10B981" value="2" />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <QuickNotes />
          <MonthlyDistribution />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
}
export default Home;
