import { Search as SearchIcon } from "lucide-react";

export function Search({ placeholder = "Search" }: { placeholder?: string }) {
  return (
    <label className="flex h-11 min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-3 text-zinc-400">
      <SearchIcon size={18} />
      <input className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500" placeholder={placeholder} />
    </label>
  );
}
