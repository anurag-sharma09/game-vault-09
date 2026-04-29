export default function SkeletonCard() {
  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-[#111827]">
      <div className="skeleton w-full" style={{ paddingTop: '56.25%' }} />
      <div className="p-3.5">
        <div className="skeleton h-3.5 w-4/5 mb-2 rounded" />
        <div className="skeleton h-3 w-1/2 mb-4 rounded" />
        <div className="flex gap-2">
          <div className="skeleton h-8 flex-1 rounded-lg" />
          <div className="skeleton h-8 flex-1 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
