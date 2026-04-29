import { motion } from 'framer-motion';
import { Star, Trash2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { deleteReview } from '../services/api';
import toast from 'react-hot-toast';

function Stars({ n }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1,2,3,4,5].map(i => <Star key={i} size={12} fill={i <= n ? '#FFD32A' : 'none'} color={i <= n ? '#FFD32A' : 'var(--text-4)'} />)}
    </div>
  );
}

export default function ReviewCard({ review, onDeleted }) {
  const { user } = useAuth();
  const isOwner = user && user.id === review.user;
  const date = new Date(review.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  const initial = review.username?.[0]?.toUpperCase() || 'U';

  const del = async () => {
    try { await deleteReview(review._id); toast.success('Review deleted'); onDeleted?.(review._id); }
    catch { toast.error('Delete failed'); }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
      style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: '1.125rem' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '0.625rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.875rem', flexShrink: 0 }}>
            {initial}
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '2px' }}>{review.username}</p>
            <Stars n={review.rating} />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>{date}</span>
          {isOwner && (
            <button onClick={del} style={{ color: 'var(--text-4)', padding: '4px', borderRadius: 'var(--r-sm)', transition: 'all 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--red)'; e.currentTarget.style.background = 'rgba(255,71,87,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-4)'; e.currentTarget.style.background = 'none'; }}>
              <Trash2 size={13} />
            </button>
          )}
        </div>
      </div>
      <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.7 }}>{review.comment}</p>
    </motion.div>
  );
}
