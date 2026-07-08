import { Bell } from "lucide-react";

export function NotificationCard({ title, message, time }: { title: string; message: string; time: string }) {
  return (
    <div className="glass flex gap-4 rounded-2xl p-4">
      <div className="mt-1 h-10 w-10 shrink-0 rounded-xl border border-white/10 bg-white/[0.06] p-2.5 text-sky-200">
        <Bell size={18} />
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="font-medium text-white">{title}</h3>
          <span className="text-xs text-zinc-500">{time}</span>
        </div>
        <p className="mt-1 text-sm leading-6 text-zinc-400">{message}</p>
      </div>
    </div>
  );
}
