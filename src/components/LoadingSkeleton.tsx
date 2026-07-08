export function LoadingSkeleton() {
  return (
    <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="h-4 w-1/3 animate-pulse rounded bg-white/10" />
      <div className="h-10 w-2/3 animate-pulse rounded bg-white/10" />
      <div className="h-4 w-full animate-pulse rounded bg-white/10" />
    </div>
  );
}
