import { NotificationCard } from "../../components/NotificationCard";
import { laborNotifications } from "../../data/mockData";
import { LaborHeader } from "./LaborDashboard";

export function LaborNotificationsPage() {
  return (
    <div className="space-y-6">
      <LaborHeader title="Notifications" detail="Work requests, quality notes, and material readiness updates." />
      <div className="grid gap-4">
        {laborNotifications.map((notification) => <NotificationCard key={notification.title} {...notification} />)}
      </div>
    </div>
  );
}
