import { Table } from "../../components/Table";
import { materials } from "../../data/mockData";
import { Header } from "./BusinessDashboard";

export function MaterialsPage() {
  return (
    <div className="space-y-6">
      <Header title="Material Tracking" detail="Track gold, silver, gemstones, leather, and other raw materials assigned to workers." />
      <Table
        rows={materials}
        columns={[
          { key: "name", label: "Material Name" },
          { key: "quantity", label: "Quantity Allocated" },
          { key: "worker", label: "Assigned Worker" },
          { key: "status", label: "Current Status" },
        ]}
      />
    </div>
  );
}
