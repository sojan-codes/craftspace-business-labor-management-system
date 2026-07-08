import { CheckCircle2, Factory, Medal, Sparkles } from "lucide-react";
import { ProfileCard } from "../../components/ProfileCard";
import { StatCard } from "../../components/StatCard";
import { LaborHeader } from "./LaborDashboard";

export function ProfilePage() {
  return (
    <div className="space-y-6">
      <LaborHeader title="Profile" detail="Professional labor profile for production assignments and business relationships." />
      <ProfileCard />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Skills" value="7" icon={Sparkles} />
        <StatCard title="Experience" value="8 yrs" icon={Medal} />
        <StatCard title="Completed Projects" value="94" icon={CheckCircle2} />
        <StatCard title="Connected Businesses" value="4" icon={Factory} />
      </div>
    </div>
  );
}
