import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import CategoriesPage from './pages/CategoriesPage.jsx'
import CategoryDetailPage from './pages/CategoryDetailPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import GameDetailPage from './pages/GameDetailPage.jsx'
import GamesPage from './pages/GamesPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import NewsPage from './pages/NewsPage.jsx'
import NewsDetailPage from './pages/NewsDetailPage.jsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '')

      requestAnimationFrame(() => {
        const target = document.getElementById(targetId)

        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })

      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}


function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="games" element={<GamesPage />} />
          <Route path="games/:slug" element={<GameDetailPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="categories/:slug" element={<CategoryDetailPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:slug" element={<NewsDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
