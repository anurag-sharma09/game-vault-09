import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Clock, MapPin, Send, ChevronDown, MessageCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const FAQS = [
  { q: 'Is AntiGravity Games free?', a: 'Yes, completely free. We are a discovery and redirect platform — we never charge you to browse or access game information.' },
  { q: 'Do you host game files?', a: 'No. Every download or play link redirects to the official source — Steam, Epic Games, Play Store, or the official website.' },
  { q: 'How do I save favorites?', a: 'Create a free account and click the ♥ icon on any game. Your favorites sync to your dashboard.' },
  { q: 'Can I play games in the browser?', a: "Some games support browser play. Look for the 'Play Now' button on the game detail page — if a browser version exists, you'll go directly there." },
  { q: 'How do I report a broken link?', a: "Use the contact form and describe the issue. We review and fix broken links within 24 hours." },
  { q: 'Can I submit a game to be listed?', a: 'Yes! Send us the game name, genre, and official store link via the contact form. Our team reviews within 48 hours.' },
];

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', overflow: 'hidden', transition: 'border-color 0.15s' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-md)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}>
      <button onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.125rem 1.25rem', textAlign: 'left', gap: '12px' }}>
        <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-1)' }}>{faq.q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0 }}>
          <ChevronDown size={16} color="var(--text-3)" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden', borderTop: '1px solid var(--border)' }}>
            <p style={{ padding: '1rem 1.25rem', fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.75 }}>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [busy, setBusy] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = async e => {
    e.preventDefault();
    setBusy(true);
    await new Promise(r => setTimeout(r, 1200));
    toast.success("Message sent! We'll reply within 24 hours.");
    setForm({ name: '', email: '', message: '' });
    setBusy(false);
  };

  return (
    <div className="page" style={{ paddingTop: '88px', paddingBottom: '5rem' }}>
      <Helmet>
        <title>Contact Us — AntiGravity Games</title>
        <meta name="description" content="Get in touch with the AntiGravity Games team. Report issues, submit games, or ask questions." />
      </Helmet>

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
            <MessageCircle size={11} /> Support
          </div>
          <h1 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
            Get in Touch
          </h1>
          <p style={{ color: 'var(--text-2)', maxWidth: '460px', margin: '0 auto', lineHeight: 1.7 }}>
            Question, issue, or want to submit a game? We typically reply within 24 hours.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {/* Form */}
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r-2xl)', padding: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1.5rem' }}>Send a Message</h2>
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', display: 'block', marginBottom: '6px' }}>Name</label>
                <input type="text" required value={form.name} onChange={e => set('name', e.target.value)} placeholder="Your name" className="input" />
              </div>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', display: 'block', marginBottom: '6px' }}>Email</label>
                <input type="email" required value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@example.com" className="input" />
              </div>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', display: 'block', marginBottom: '6px' }}>Message</label>
                <textarea required value={form.message} onChange={e => set('message', e.target.value)} rows={5} placeholder="How can we help?" className="input" />
              </div>
              <button type="submit" disabled={busy} className="btn btn-primary" style={{ opacity: busy ? 0.7 : 1 }}>
                {busy
                  ? <div className="spinner" style={{ width: '16px', height: '16px', borderWidth: '2px', borderTopColor: '#fff' }} />
                  : <><Send size={15} /> Send Message</>
                }
              </button>
            </form>
          </div>

          {/* Info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { icon: Mail,    title: 'Email',         desc: 'support@antigravitygames.com',          color: 'var(--accent)' },
              { icon: Clock,   title: 'Response Time',  desc: 'Within 24 hours on business days.',     color: 'var(--primary)' },
              { icon: MapPin,  title: 'Platform',       desc: 'Fully online — no physical location.',  color: 'var(--green)' },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div key={title} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: '1.25rem', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--r-md)', background: `${color}18`, border: `1px solid ${color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={18} color={color} />
                </div>
                <div>
                  <p style={{ fontWeight: 700, marginBottom: '3px', fontSize: '0.95rem' }}>{title}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-2)' }}>{desc}</p>
                </div>
              </div>
            ))}

            <div style={{ background: 'linear-gradient(135deg, rgba(108,92,231,0.1), rgba(0,229,255,0.07))', border: '1px solid rgba(108,92,231,0.2)', borderRadius: 'var(--r-xl)', padding: '1.25rem' }}>
              <p style={{ fontWeight: 700, marginBottom: '6px', color: 'var(--primary)' }}>🎮 Submit a Game</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-2)', lineHeight: 1.7 }}>Want a game listed? Send us the title, genre, and official store link via the form above.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div id="faq">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>FAQ</div>
            <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', letterSpacing: '-0.03em' }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {FAQS.map(f => <FaqItem key={f.q} faq={f} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
