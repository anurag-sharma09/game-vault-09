import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import SignInModal from './SignInModal.jsx'

const PLAYER_TAG_KEY = 'game-vault-player-tag'

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
        <div className="hero-orb absolute left-[4%] top-24 h-72 w-72 rounded-full bg-violet-500/18 blur-[120px]" />
        <div className="hero-orb-delay absolute right-[6%] top-16 h-80 w-80 rounded-full bg-cyan-400/12 blur-[140px]" />
        <div className="absolute inset-x-0 top-[28rem] h-80 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_55%)]" />
      </div>

      <Navbar playerTag={playerTag} onOpenSignIn={() => setSignInOpen(true)} />

      <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
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
