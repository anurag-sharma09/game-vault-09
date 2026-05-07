import { useState, useEffect } from 'react';

const WISHLIST_KEY = 'gamevault_wishlist';
const HISTORY_KEY = 'gamevault_history';

/**
 * Custom hook to manage persistent store data (Wishlist & History).
 * Uses event listeners to keep state synced across multiple components.
 */
export function useStoreData() {
  const [wishlist, setWishlist] = useState([]);
  const [history, setHistory] = useState([]);

  // Initialize from localStorage
  useEffect(() => {
    const loadedWishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]');
    const loadedHistory = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    setWishlist(loadedWishlist);
    setHistory(loadedHistory);

    // Sync state if another component modifies the localStorage
    const handleStorageChange = (e) => {
      if (e.key === WISHLIST_KEY) {
        setWishlist(JSON.parse(e.newValue || '[]'));
      } else if (e.key === HISTORY_KEY) {
        setHistory(JSON.parse(e.newValue || '[]'));
      }
    };

    // Custom event listener for same-window syncing
    const handleLocalChange = () => {
      setWishlist(JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]'));
      setHistory(JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'));
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('store-updated', handleLocalChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('store-updated', handleLocalChange);
    };
  }, []);

  const dispatchUpdate = () => {
    window.dispatchEvent(new Event('store-updated'));
  };

  const toggleWishlist = (gameId) => {
    const current = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]');
    let next;
    
    if (current.includes(gameId)) {
      next = current.filter(id => id !== gameId);
    } else {
      next = [...current, gameId];
    }
    
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(next));
    setWishlist(next);
    dispatchUpdate();
    return next.includes(gameId); // Returns true if added, false if removed
  };

  const isInWishlist = (gameId) => {
    return wishlist.includes(gameId);
  };

  const addToHistory = (gameId) => {
    const current = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    // Remove if exists to push to top
    const filtered = current.filter(id => id !== gameId);
    const next = [gameId, ...filtered].slice(0, 10); // Keep max 10
    
    localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
    setHistory(next);
    dispatchUpdate();
  };

  const clearHistory = () => {
    localStorage.setItem(HISTORY_KEY, '[]');
    setHistory([]);
    dispatchUpdate();
  };

  return {
    wishlist,
    history,
    toggleWishlist,
    isInWishlist,
    addToHistory,
    clearHistory
  };
}
