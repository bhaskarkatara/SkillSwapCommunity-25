import axios from 'axios';

// Base API URL (can be moved to a constants.ts or env file)
const BASE_URL = 'http://192.168.29.159:8081';

// Create a reusable axios instance (optional, useful for adding headers later)
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Signup to OTP API
export const signupToOtp = async (data: {
  name: string;
  email: string;
  contact: string;
  skills: string[];
  password: string;
}) => {
  const response = await api.post('/auth/signup-to-otp', data);
  return response.data;
};

export const verifyOtp = async (data: {
  name: string;
  email: string;
  contact: string;
  skills: string[];
  password: string;
  otp: number;
}) => {
  const response = await api.post('auth/verifyOtp', data);
  return response.data;
};

export const login = async (data: { email: string; password: string }) => {
  const response = await api.post('auth/login', data);
  return response.data;
};

export const getUserProfile = async () => {
  const token = localStorage.getItem('authToken'); // or "token", depending on how you stored it

  const response = await api.get('/user/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
