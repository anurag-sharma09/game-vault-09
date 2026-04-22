/** Loading skeleton that mimics a GameCard layout */
export default function SkeletonCard() {
  return (
    <div style={{ background: '#111827', border: '1px solid #1F2D45', borderRadius: '12px', overflow: 'hidden' }}>
      {/* Image skeleton */}
      <div className="skeleton" style={{ aspectRatio: '16/9', width: '100%' }} />
      {/* Content skeleton */}
      <div style={{ padding: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <div className="skeleton" style={{ height: '18px', width: '80%', borderRadius: '4px' }} />
        <div className="skeleton" style={{ height: '13px', width: '50%', borderRadius: '4px' }} />
        <div style={{ display: 'flex', gap: '6px' }}>
          <div className="skeleton" style={{ height: '20px', width: '48px', borderRadius: '20px' }} />
          <div className="skeleton" style={{ height: '20px', width: '56px', borderRadius: '20px' }} />
        </div>
      </div>
    </div>
  );
}
