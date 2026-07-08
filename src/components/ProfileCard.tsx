import { Badge } from "./Badge";

export function ProfileCard() {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-white to-zinc-500 text-2xl font-bold text-zinc-950">MT</div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Maya Tamang</h2>
          <p className="mt-1 text-zinc-400">Gold filigree artisan with 8 years of production experience.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Gold detailing", "Stone setting", "Quality finishing"].map((skill) => <Badge key={skill} tone="blue">{skill}</Badge>)}
          </div>
        </div>
      </div>
    </div>
  );
}
