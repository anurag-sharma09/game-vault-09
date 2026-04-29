import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { GameProvider } from './context/GameContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const GamesPage = lazy(() => import('./pages/GamesPage'));
const GameDetailPage = lazy(() => import('./pages/GameDetailPage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const SearchResultsPage = lazy(() => import('./pages/SearchResultsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const UserDashboard = lazy(() => import('./pages/UserDashboard'));
const AdminLoginPage = lazy(() => import('./pages/AdminLoginPage'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const Loader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-2 border-[#38BDF8] border-t-transparent rounded-full animate-spin" />
      <span className="text-xs text-white/30 font-mono tracking-widest uppercase">Loading...</span>
    </div>
  </div>
);

function AppShell() {
  const location = useLocation();
  const showFooter = location.pathname !== '/';

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/game/:id" element={<GameDetailPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />

            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute adminOnly>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="*"
              element={
                <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
                  <h1 className="mb-4 text-8xl font-outfit font-black text-gradient-blue">404</h1>
                  <p className="mb-8 text-white/40">This page doesn&apos;t exist in our galaxy.</p>
                  <a href="/" className="btn-primary">
                    Back to Home
                  </a>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <GameProvider>
            <AppShell />

            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: '#0F1829',
                  color: '#F0F9FF',
                  border: '1px solid rgba(56,189,248,0.2)',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.85rem',
                  borderRadius: '14px',
                },
                success: { iconTheme: { primary: '#34D399', secondary: '#080C14' } },
                error: { iconTheme: { primary: '#EF4444', secondary: '#080C14' } },
              }}
            />
          </GameProvider>
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
