import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { GameProvider } from './context/GameContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GameDetailPage from './pages/GameDetailPage';
import CategoryPage from './pages/CategoryPage';
import SearchResultsPage from './pages/SearchResultsPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <GameProvider>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              <Navbar />
              <main style={{ flex: 1 }}>
                <Routes>
                  <Route path="/"                  element={<HomePage />} />
                  <Route path="/game/:id"           element={<GameDetailPage />} />
                  <Route path="/category/:category" element={<CategoryPage />} />
                  <Route path="/search"             element={<SearchResultsPage />} />
                  <Route path="/admin/login"        element={<AdminLoginPage />} />
                  <Route path="/admin"              element={<AdminDashboard />} />
                  {/* 404 */}
                  <Route path="*" element={
                    <div style={{ textAlign: 'center', padding: '5rem 1.5rem' }}>
                      <h1 style={{ fontFamily: 'Rajdhani', fontSize: '4rem', color: '#8B5CF6' }}>404</h1>
                      <p style={{ color: '#6B7280' }}>Page not found</p>
                      <a href="/" style={{ color: '#06B6D4', textDecoration: 'none', marginTop: '1rem', display: 'inline-block' }}>← Back to Home</a>
                    </div>
                  } />
                </Routes>
              </main>
              <Footer />
            </div>

            {/* Toast notifications */}
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: { background: '#1A2235', color: '#F9FAFB', border: '1px solid #1F2D45', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' },
                success: { iconTheme: { primary: '#10B981', secondary: '#0D1117' } },
                error:   { iconTheme: { primary: '#EF4444', secondary: '#0D1117' } },
              }}
            />
          </GameProvider>
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
