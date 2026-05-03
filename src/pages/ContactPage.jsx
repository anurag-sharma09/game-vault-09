import { Mail, Headphones, Scale } from 'lucide-react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'

function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: 'Partnerships',
    message: '',
  })
  const [messageReady, setMessageReady] = useState(false)

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
    setMessageReady(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(`[AntiGravity Games] ${form.topic} from ${form.name || 'Website Visitor'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\nMessage:\n${form.message}`,
    )

    setMessageReady(true)

    if (typeof window !== 'undefined') {
      window.location.href = `mailto:contact@antigravitygames.com?subject=${subject}&body=${body}`
    }
  }

  return (
    <div className="mx-auto max-w-[92rem] space-y-10 px-4 pt-32 sm:px-6 lg:px-10">
      <section className="glass-panel rounded-[36px] px-6 py-10 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Talk partnerships, support, or legal requests"
          description="The form below opens an email draft using the message details you enter, keeping the AntiGravity frontend fully static-friendly while still giving you a real contact flow."
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <article className="glass-panel rounded-[30px] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/12 text-cyan-100">
              <Mail className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-display text-2xl text-white">Partnerships</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300/78">
              For store integrations, sponsored shelves, and publisher submissions.
            </p>
            <a href="mailto:partners@antigravitygames.com" className="mt-4 inline-block text-sm font-semibold text-cyan-100">
              partners@antigravitygames.com
            </a>
          </article>

          <article className="glass-panel rounded-[30px] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/12 text-violet-100">
              <Headphones className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-display text-2xl text-white">Support</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300/78">
              Questions about redirects, missing games, or catalog updates.
            </p>
            <a href="mailto:support@antigravitygames.com" className="mt-4 inline-block text-sm font-semibold text-cyan-100">
              support@antigravitygames.com
            </a>
          </article>

          <article className="glass-panel rounded-[30px] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/12 text-emerald-100">
              <Scale className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-display text-2xl text-white">Legal & Takedowns</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300/78">
              Report ownership concerns, brand issues, or redirects that need removal.
            </p>
            <a href="mailto:legal@antigravitygames.com" className="mt-4 inline-block text-sm font-semibold text-cyan-100">
              legal@antigravitygames.com
            </a>
          </article>
        </div>

        <article className="glass-panel rounded-[32px] p-6 sm:p-8">
          <h2 className="font-display text-3xl text-white">Open a message draft</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300/78">
            This sends the message details into your default mail app, which is a simple legal-safe contact pattern for static deployments.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <label className="block text-sm text-slate-300">
              Name
              <input
                type="text"
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
                placeholder="Your name"
                className="mt-2 w-full rounded-2xl border border-white/12 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300/36 focus:outline-none"
              />
            </label>

            <label className="block text-sm text-slate-300">
              Email
              <input
                type="email"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
                placeholder="you@studio.com"
                className="mt-2 w-full rounded-2xl border border-white/12 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300/36 focus:outline-none"
                required
              />
            </label>

            <label className="block text-sm text-slate-300">
              Topic
              <select
                value={form.topic}
                onChange={(event) => updateField('topic', event.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/12 bg-slate-950/60 px-4 py-3 text-white focus:border-cyan-300/36 focus:outline-none"
              >
                <option>Partnerships</option>
                <option>Support</option>
                <option>Legal</option>
                <option>Catalog Update</option>
              </select>
            </label>

            <label className="block text-sm text-slate-300">
              Message
              <textarea
                value={form.message}
                onChange={(event) => updateField('message', event.target.value)}
                placeholder="Tell us what you need..."
                rows="6"
                className="mt-2 w-full rounded-3xl border border-white/12 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300/36 focus:outline-none"
                required
              />
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(34,211,238,0.95))] px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              Open Email Draft
            </button>

            {messageReady ? (
              <p className="text-sm leading-7 text-emerald-200/88">
                Your email draft has been prepared with the details from this form.
              </p>
            ) : null}
          </form>
        </article>
      </section>
    </div>
  )
}

export default ContactPage
