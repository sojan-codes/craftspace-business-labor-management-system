import { Inbox } from "lucide-react";

export function EmptyState({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-white/12 bg-white/[0.03] p-8 text-center">
      <Inbox className="mx-auto text-zinc-500" size={30} />
      <h3 className="mt-4 font-medium text-white">{title}</h3>
      <p className="mt-2 text-sm text-zinc-400">{detail}</p>
    </div>
  );
}
