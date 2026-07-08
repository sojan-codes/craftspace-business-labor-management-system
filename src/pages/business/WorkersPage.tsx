import { Search } from "../../components/Search";
import { Table } from "../../components/Table";
import { workers } from "../../data/mockData";
import { Header } from "./BusinessDashboard";

export function WorkersPage() {
  return (
    <div className="space-y-6">
      <Header title="Workers" detail="Maintain worker records, skills, order assignment status, and contact details." action={<Search placeholder="Search workers" />} />
      <Table
        rows={workers}
        columns={[
          { key: "name", label: "Worker Name" },
          { key: "skill", label: "Skill" },
          { key: "status", label: "Status" },
          { key: "assignedOrders", label: "Assigned Orders" },
          { key: "contact", label: "Contact" },
        ]}
        actions={["View", "Assign Work"]}
      />
    </div>
  );
}
