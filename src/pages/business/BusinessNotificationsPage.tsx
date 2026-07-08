import { NotificationCard } from "../../components/NotificationCard";
import { notifications } from "../../data/mockData";
import { Header } from "./BusinessDashboard";

export function BusinessNotificationsPage() {
  return (
    <div className="space-y-6">
      <Header title="Notifications" detail="Operational updates for orders, materials, and worker availability." />
      <div className="grid gap-4">
        {notifications.map((notification) => <NotificationCard key={notification.title} {...notification} />)}
      </div>
    </div>
  );
}
