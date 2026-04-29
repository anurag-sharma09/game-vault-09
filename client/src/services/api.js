import axios from 'axios';

const API = axios.create({ baseURL: '/api', timeout: 10000 });

// Attach token — checks both user and admin tokens
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('ag_user_token') || localStorage.getItem('gv_admin_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ── Games ─────────────────────────────────────────────────────
export const fetchGames       = (params = {}) => API.get('/games', { params });
export const fetchGameById    = (id)           => API.get(`/games/${id}`);
export const searchGames      = (q, page = 1) => API.get('/games/search', { params: { q, page } });
export const fetchTrending    = (limit = 8)   => API.get('/games/trending', { params: { limit } });
export const fetchFreeGames   = (limit = 8)   => API.get('/games/free', { params: { limit } });
export const fetchLowEndGames = (limit = 8)   => API.get('/games/lowend', { params: { limit } });

// ── Admin Game CRUD ────────────────────────────────────────────
export const createGame = (data)     => API.post('/games', data);
export const updateGame = (id, data) => API.put(`/games/${id}`, data);
export const deleteGame = (id)       => API.delete(`/games/${id}`);

// ── Admin Auth ─────────────────────────────────────────────────
export const adminLogin    = (creds) => API.post('/auth/login', creds);
export const adminRegister = (data)  => API.post('/auth/register', data);
export const getAdminMe    = ()      => API.get('/auth/me');

// ── User Auth ──────────────────────────────────────────────────
export const userRegister  = (data)  => API.post('/users/register', data);
export const userLogin     = (data)  => API.post('/users/login', data);
export const getUserMe     = ()      => API.get('/users/me');
export const updateProfile = (data)  => API.put('/users/me', data);

// ── User Actions ───────────────────────────────────────────────
export const toggleFavorite = (gameId)           => API.post(`/users/favorites/${gameId}`);
export const logPlayed      = (gameId)           => API.post(`/users/played/${gameId}`);
export const logDownload    = (gameId, platform) => API.post(`/users/download/${gameId}`, { platform });

// ── Reviews ────────────────────────────────────────────────────
export const getReviews    = (gameId)          => API.get(`/reviews/${gameId}`);
export const addReview     = (gameId, data)    => API.post(`/reviews/${gameId}`, data);
export const deleteReview  = (reviewId)        => API.delete(`/reviews/${reviewId}`);

export default API;
