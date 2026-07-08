import { Button } from "../../components/Button";
import { Badge } from "../../components/Badge";
import { ProgressBar } from "../../components/ProgressBar";
import { laborJobs, toneForStatus } from "../../data/mockData";
import { LaborHeader } from "./LaborDashboard";

export function MyJobsPage() {
  return (
    <div className="space-y-6">
      <LaborHeader title="My Jobs" detail="Review assigned work, respond to requests, and update production progress." />
      <div className="grid gap-4 lg:grid-cols-3">
        {laborJobs.map((job) => (
          <div key={job.id} className="glass rounded-2xl p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-semibold">{job.product}</h2>
                <p className="mt-1 text-sm text-zinc-400">{job.business}</p>
              </div>
              <Badge tone={toneForStatus(job.status)}>{job.status}</Badge>
            </div>
            <p className="mt-5 text-sm text-zinc-500">Deadline</p>
            <p className="mt-1 text-zinc-200">{job.deadline}</p>
            <div className="mt-5">
              <ProgressBar value={job.progress} />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2">
              <Button variant="accept" size="sm" className="cursor-pointer">Accept</Button>
              <Button variant="secondary" size="sm" className="cursor-pointer">Reject</Button>
              <Button variant="secondary" size="sm" className="cursor-pointer">Update Progress</Button>
              <Button variant="secondary" size="sm" className="cursor-pointer">View Details</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
