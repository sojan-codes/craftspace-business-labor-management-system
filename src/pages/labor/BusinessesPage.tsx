import { Building2 } from "lucide-react";
import { businesses } from "../../data/mockData";
import { LaborHeader } from "./LaborDashboard";

export function BusinessesPage() {
  return (
    <div className="space-y-6">
      <LaborHeader title="Businesses" detail="Businesses currently connected to this worker profile." />
      <div className="grid gap-4 md:grid-cols-2">
        {businesses.map((business) => (
          <div key={business.name} className="glass rounded-2xl p-5">
            <Building2 className="text-sky-200" size={24} />
            <h2 className="mt-5 font-semibold">{business.name}</h2>
            <p className="mt-2 text-sm text-zinc-400">{business.industry}</p>
            <p className="mt-5 text-sm text-zinc-500">Active Jobs</p>
            <p className="mt-1 text-2xl font-semibold">{business.activeJobs}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
