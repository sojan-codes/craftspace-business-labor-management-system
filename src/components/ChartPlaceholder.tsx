export function ChartPlaceholder({ title }: { title: string }) {
  const bars = [48, 74, 56, 88, 66, 92, 78];
  return (
    <div className="glass rounded-2xl p-5">
      <h3 className="font-medium text-white">{title}</h3>
      <div className="mt-6 flex h-44 items-end gap-3">
        {bars.map((bar, index) => (
          <div key={index} className="flex flex-1 items-end rounded-t-xl bg-white/[0.05]">
            <div className="w-full rounded-t-xl bg-gradient-to-t from-sky-400/70 to-emerald-300/90" style={{ height: `${bar}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}
