import type { BadgeTone } from "../data/mockData";

const tones: Record<BadgeTone, string> = {
  emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  amber: "border-amber-400/20 bg-amber-400/10 text-amber-200",
  blue: "border-sky-400/20 bg-sky-400/10 text-sky-200",
  rose: "border-rose-400/20 bg-rose-400/10 text-rose-200",
  zinc: "border-white/10 bg-white/[0.06] text-zinc-300",
};

export function Badge({ children, tone = "zinc" }: { children: string; tone?: BadgeTone }) {
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${tones[tone]}`}>{children}</span>;
}
