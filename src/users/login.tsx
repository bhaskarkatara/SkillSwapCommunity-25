import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from "../api/auth";
import { StatementSync } from 'node:sqlite';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const payload = { email, password };
      // console.log("Logging in with:", payload);
      const response = await login(payload);
      localStorage.setItem("authToken", response.token);
     
      console.log(response);
      navigate('/dashboard' , { state: email });
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-300 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Skill Swap Community</h1>
        <div className="flex space-x-6 text-gray-700 font-medium">
          <button onClick={() => navigate('/')} className="hover:underline">Home</button>
          <button onClick={() => navigate('/about')} className="hover:underline">About Us</button>
          <button onClick={() => navigate('/contact')} className="hover:underline">Contact</button>
        </div>
      </nav>

      {/* Main login form */}
      <div className="flex flex-1 justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Welcome Back</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Password</label>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="text-right text-sm">
              <button className="text-blue-600 hover:underline">Forgot Password?</button>
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md mt-2"
            >
              Login
            </button>

            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="mx-4 text-gray-500 text-sm">or</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-semibold">
                Google
              </button>
              <button className="flex-1 bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-md font-semibold">
                Facebook
              </button>
            </div>

            <div className="text-center text-sm mt-4">
              New here?{" "}
              <button onClick={() => navigate("/signup")} className="text-blue-600 font-semibold hover:underline">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
