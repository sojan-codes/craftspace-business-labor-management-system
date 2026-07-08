import { Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { ProgressBar } from "../../components/ProgressBar";
import { Table } from "../../components/Table";
import { orders } from "../../data/mockData";
import { Header } from "./BusinessDashboard";

export function OrdersPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-6">
      <Header
        title="Production Orders"
        detail="Assign products to skilled workers and monitor status, deadlines, and priority."
        action={<Button onClick={() => setOpen(true)}><Plus size={18} />New Order</Button>}
      />
      <Table
        rows={orders}
        columns={[
          { key: "product", label: "Product" },
          { key: "worker", label: "Assigned Worker" },
          { key: "status", label: "Status" },
          { key: "deadline", label: "Deadline" },
          { key: "priority", label: "Priority" },
          { key: "progress", label: "Progress", render: (row) => <div className="w-32"><ProgressBar value={Number(row.progress)} /></div> },
        ]}
      />
      <Modal open={open} title="Create production order" onClose={() => setOpen(false)}>
        <div className="grid gap-4">
          {["Product name", "Assigned worker", "Deadline", "Priority", "Material allocation note"].map((label) => (
            <label key={label} className="grid gap-2 text-sm text-zinc-300">
              {label}
              <input className="h-11 rounded-xl border border-white/10 bg-white/[0.05] px-3 text-white outline-none focus:border-white/25" />
            </label>
          ))}
        </div>
      </Modal>
    </div>
  );
}
