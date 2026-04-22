import { createContext, useContext, useReducer, useCallback } from 'react';
import {
  fetchGames, fetchTrending, fetchFreeGames,
  fetchLowEndGames, searchGames as searchAPI,
} from '../services/api';

const GameContext = createContext(null);

const initialState = {
  games:       [], trending: [], freeGames: [], lowEndGames: [],
  loading:     false, error: null,
  pagination:  { total: 0, page: 1, pages: 1, limit: 12 },
  filters:     { genre: '', platform: '', isFree: '', sort: 'rating', tag: '' },
  searchQuery: '', searchResults: [], searchLoading: false,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':       return { ...state, loading: action.payload };
    case 'SET_ERROR':         return { ...state, error: action.payload, loading: false };
    case 'SET_GAMES':         return { ...state, games: action.payload.data, pagination: action.payload.pagination, loading: false };
    case 'SET_TRENDING':      return { ...state, trending: action.payload };
    case 'SET_FREE':          return { ...state, freeGames: action.payload };
    case 'SET_LOWEND':        return { ...state, lowEndGames: action.payload };
    case 'SET_FILTERS':       return { ...state, filters: { ...state.filters, ...action.payload } };
    case 'SET_SEARCH_QUERY':  return { ...state, searchQuery: action.payload };
    case 'SET_SEARCH_RESULTS':return { ...state, searchResults: action.payload, searchLoading: false };
    case 'SET_SEARCH_LOADING':return { ...state, searchLoading: action.payload };
    default:                  return state;
  }
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const loadGames = useCallback(async (params = {}) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const res = await fetchGames({ ...state.filters, ...params });
      dispatch({ type: 'SET_GAMES', payload: res.data });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err.response?.data?.message || 'Failed to load games' });
    }
  }, [state.filters]);

  const loadHomepageData = useCallback(async () => {
    try {
      const [trending, free, lowEnd] = await Promise.all([
        fetchTrending(8), fetchFreeGames(8), fetchLowEndGames(8),
      ]);
      dispatch({ type: 'SET_TRENDING',  payload: trending.data.data });
      dispatch({ type: 'SET_FREE',      payload: free.data.data });
      dispatch({ type: 'SET_LOWEND',    payload: lowEnd.data.data });
    } catch (err) {
      console.error('Homepage data error:', err.message);
    }
  }, []);

  const setFilters = useCallback((filters) => {
    dispatch({ type: 'SET_FILTERS', payload: filters });
  }, []);

  const search = useCallback(async (query) => {
    dispatch({ type: 'SET_SEARCH_QUERY',  payload: query });
    dispatch({ type: 'SET_SEARCH_LOADING', payload: true });
    try {
      const res = await searchAPI(query);
      dispatch({ type: 'SET_SEARCH_RESULTS', payload: res.data.data });
    } catch (err) {
      dispatch({ type: 'SET_SEARCH_RESULTS', payload: [] });
    }
  }, []);

  return (
    <GameContext.Provider value={{ ...state, loadGames, loadHomepageData, setFilters, search }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be inside GameProvider');
  return ctx;
};
