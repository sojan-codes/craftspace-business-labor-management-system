import { BriefcaseBusiness, Building2, CheckCircle2, Clock3 } from "lucide-react";
import { ChartPlaceholder } from "../../components/ChartPlaceholder";
import { StatCard } from "../../components/StatCard";
import { laborJobs } from "../../data/mockData";
import { ProgressBar } from "../../components/ProgressBar";

export function LaborDashboard() {
  return (
    <div className="space-y-6">
      <LaborHeader title="Dashboard" detail="Track active jobs, requests, completed work, and connected businesses." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Active Jobs" value="3" icon={BriefcaseBusiness} />
        <StatCard title="Pending Requests" value="2" icon={Clock3} />
        <StatCard title="Completed Jobs" value="94" icon={CheckCircle2} />
        <StatCard title="Businesses Working With" value="4" icon={Building2} />
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass rounded-2xl p-5">
          <h2 className="font-medium">Current work</h2>
          <div className="mt-5 space-y-4">
            {laborJobs.map((job) => (
              <div key={job.id} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium">{job.product}</p>
                    <p className="text-sm text-zinc-500">{job.business}</p>
                  </div>
                  <span className="text-sm text-zinc-400">{job.progress}%</span>
                </div>
                <ProgressBar value={job.progress} />
              </div>
            ))}
          </div>
        </div>
        <ChartPlaceholder title="Completed work trend" />
      </div>
    </div>
  );
}

export function LaborHeader({ title, detail, action }: { title: string; detail: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Labor</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-2 text-zinc-400">{detail}</p>
      </div>
      {action}
    </div>
  );
}
