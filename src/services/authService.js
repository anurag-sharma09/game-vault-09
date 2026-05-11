const BASE_URL = import.meta.env.VITE_API_URL || '/api';

const handleResponse = async (response) => {
  const text = await response.text();
  let data = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch (e) {
    console.error('[API Error] Failed to parse JSON:', text);
    throw new Error('Server returned an invalid response');
  }
  
  if (!response.ok) {
    const error = data.message || 'Request failed';
    console.error('[API Error]', error);
    throw new Error(error);
  }
  
  return data;
};

export const register = async (email, password, playerTag) => {
  console.log('[AUTH] Attempting register...');
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, playerTag })
  });

  return handleResponse(response);
};

export const login = async (email, password) => {
  console.log('[AUTH] Attempting login...');
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  return handleResponse(response);
};

export const getCurrentUser = async (token) => {
  if (!token) return null;
  
  const response = await fetch(`${BASE_URL}/auth/me`, {
    headers: {
      'x-auth-token': token
    }
  });

  const data = await handleResponse(response);
  return data.user;
};
