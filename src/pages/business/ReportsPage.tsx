import { ChartPlaceholder } from "../../components/ChartPlaceholder";
import { StatCard } from "../../components/StatCard";
import { businessReports } from "../../data/mockData";
import { ClipboardCheck } from "lucide-react";
import { Header } from "./BusinessDashboard";

export function ReportsPage() {
  return (
    <div className="space-y-6">
      <Header title="Reports" detail="Focused reporting for worker productivity, order progress, and material usage." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {businessReports.map((report) => (
          <StatCard key={report.title} title={report.title} value={report.value} detail={report.detail} icon={ClipboardCheck} />
        ))}
      </div>
      <ChartPlaceholder title="Material usage by production week" />
    </div>
  );
}
