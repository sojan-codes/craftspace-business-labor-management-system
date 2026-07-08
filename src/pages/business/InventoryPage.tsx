import { Table } from "../../components/Table";
import { inventory } from "../../data/mockData";
import { Header } from "./BusinessDashboard";

export function InventoryPage() {
  return (
    <div className="space-y-6">
      <Header title="Inventory" detail="Production inventory for raw materials and finished products only." />
      <Table
        rows={inventory}
        columns={[
          { key: "category", label: "Category" },
          { key: "item", label: "Item" },
          { key: "available", label: "Available" },
          { key: "reserved", label: "Reserved for Production" },
          { key: "status", label: "Status" },
        ]}
      />
    </div>
  );
}
