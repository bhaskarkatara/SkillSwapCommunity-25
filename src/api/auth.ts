import { ISignUp } from '@/types/user';
import axios from 'axios';
const BASE_URL = 'https://skills-swap-backend-1.onrender.com';

// Reusable Axios instance
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Signup to OTP
export const signUp = async (data: ISignUp) => {
  const response = await api.post('/auth/signup-to-otp', data);
  return response.data;
};

// Verify OTP
export const verifyOtp = async (data: {
  name: string;
  email: string;
  contact: string;
  skills: string[];
  password: string;
  otp: number;
}) => {
  const response = await api.post('/auth/verifyOtp', data);
  return response.data.data;
};

// Login
export const login = async (data: { email: string; password: string }) => {
  const response = await api.post('/auth/login', data);
  return response.data;
};

// Get user profile
export const getUserProfile = async () => {
  const token = localStorage.getItem('token');

  const response = await api.get('/user/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Update user details
export const updateDetails = async (data: {
  name: string;
  contact: string;
  skills: string[];
}) => {
  const token = localStorage.getItem('token');
  const response = await api.put('/user/update', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// 🔧 Fix: Add headers to search-user to avoid CORS issues
export const searchUser = async (skill: string) => {
  const token = localStorage.getItem('token');
  const response = await api.get(`/user/search-user/${skill}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
