import axios from 'axios';

// Base Axios instance — proxied to /api via Vite in dev
const API = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

// Attach JWT token if present
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('gv_admin_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ── Game API ──────────────────────────────────────────────────

/** Fetch all games with optional filters & pagination */
export const fetchGames = (params = {}) => API.get('/games', { params });

/** Fetch single game by ID (increments view count) */
export const fetchGameById = (id) => API.get(`/games/${id}`);

/** Search games by query */
export const searchGames = (q, page = 1) => API.get('/games/search', { params: { q, page } });

/** Fetch trending games */
export const fetchTrending = (limit = 8) => API.get('/games/trending', { params: { limit } });

/** Fetch free games */
export const fetchFreeGames = (limit = 8) => API.get('/games/free', { params: { limit } });

/** Fetch low-end PC games */
export const fetchLowEndGames = (limit = 8) => API.get('/games/lowend', { params: { limit } });

// ── Admin Game CRUD ───────────────────────────────────────────
export const createGame   = (data) => API.post('/games', data);
export const updateGame   = (id, data) => API.put(`/games/${id}`, data);
export const deleteGame   = (id) => API.delete(`/games/${id}`);

// ── Auth API ──────────────────────────────────────────────────
export const adminLogin    = (creds) => API.post('/auth/login', creds);
export const adminRegister = (data)  => API.post('/auth/register', data);
export const getAdminMe    = ()      => API.get('/auth/me');

export default API;
