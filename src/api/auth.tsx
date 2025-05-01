import axios from "axios";

// Base API URL (can be moved to a constants.ts or env file)
const BASE_URL = "http://192.168.29.159:8081";

// Create a reusable axios instance (optional, useful for adding headers later)
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
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
  const response = await api.post("/auth/signup-to-otp", data);
  return response.data;
};
