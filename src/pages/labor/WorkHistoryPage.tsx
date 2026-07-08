import { Table } from "../../components/Table";
import { workHistory } from "../../data/mockData";
import { LaborHeader } from "./LaborDashboard";

export function WorkHistoryPage() {
  return (
    <div className="space-y-6">
      <LaborHeader title="Work History" detail="Completed production work and acceptance outcomes." />
      <Table
        rows={workHistory}
        columns={[
          { key: "product", label: "Product" },
          { key: "business", label: "Business" },
          { key: "completed", label: "Completed" },
          { key: "outcome", label: "Outcome" },
        ]}
      />
    </div>
  );
}
