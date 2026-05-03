import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import SignInModal from './SignInModal.jsx'

const PLAYER_TAG_KEY = 'antigravity-player-tag'

function Layout() {
  const [signInOpen, setSignInOpen] = useState(false)
  const [playerTag, setPlayerTag] = useState(() => {
    if (typeof window === 'undefined') {
      return ''
    }

    return window.localStorage.getItem(PLAYER_TAG_KEY) ?? ''
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (playerTag) {
        window.localStorage.setItem(PLAYER_TAG_KEY, playerTag)
      } else {
        window.localStorage.removeItem(PLAYER_TAG_KEY)
      }
    }
  }, [playerTag])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="hero-orb absolute left-[-6%] top-8 h-[28rem] w-[28rem] rounded-full bg-violet-500/14 blur-[150px]" />
        <div className="hero-orb-delay absolute right-[-4%] top-10 h-[32rem] w-[32rem] rounded-full bg-cyan-400/10 blur-[160px]" />
        <div className="absolute inset-x-0 top-[34rem] h-96 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_58%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[28rem] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_58%)]" />
      </div>

      <Navbar playerTag={playerTag} onOpenSignIn={() => setSignInOpen(true)} />

      <main className="w-full pb-16">
        <Outlet />
      </main>

      <Footer />

      {signInOpen ? (
        <SignInModal
          open={signInOpen}
          onClose={() => setSignInOpen(false)}
          onSave={setPlayerTag}
          playerTag={playerTag}
        />
      ) : null}
    </div>
  )
}

export default Layout
