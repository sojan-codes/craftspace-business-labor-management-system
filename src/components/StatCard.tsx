import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function StatCard({ title, value, icon: Icon, detail }: { title: string; value: string; icon: LucideIcon; detail?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-zinc-400">{title}</p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-white">{value}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3 text-zinc-200">
          <Icon size={20} />
        </div>
      </div>
      {detail ? <p className="mt-4 text-sm leading-6 text-zinc-400">{detail}</p> : null}
    </motion.div>
  );
}
