import { Boxes, CheckCircle2, ClipboardList, Clock3, Users } from "lucide-react";
import { ChartPlaceholder } from "../../components/ChartPlaceholder";
import { ProgressBar } from "../../components/ProgressBar";
import { StatCard } from "../../components/StatCard";
import { orders } from "../../data/mockData";

export function BusinessDashboard() {
  return (
    <div className="space-y-6">
      <Header title="Dashboard" detail="Monitor workers, production orders, and allocated materials." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <StatCard title="Total Workers" value="48" icon={Users} />
        <StatCard title="Active Orders" value="17" icon={ClipboardList} />
        <StatCard title="Pending Orders" value="9" icon={Clock3} />
        <StatCard title="Completed Orders" value="146" icon={CheckCircle2} />
        <StatCard title="Materials Allocated" value="71%" icon={Boxes} />
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ChartPlaceholder title="Weekly production completion" />
        <div className="glass rounded-2xl p-5">
          <h2 className="font-medium">Priority production orders</h2>
          <div className="mt-5 space-y-4">
            {orders.slice(0, 3).map((order) => (
              <div key={order.id} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium">{order.product}</p>
                    <p className="text-sm text-zinc-500">{order.worker} · {order.deadline}</p>
                  </div>
                  <span className="text-sm text-zinc-400">{order.progress}%</span>
                </div>
                <ProgressBar value={order.progress} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header({ title, detail, action }: { title: string; detail: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Business</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-2 text-zinc-400">{detail}</p>
      </div>
      {action}
    </div>
  );
}
