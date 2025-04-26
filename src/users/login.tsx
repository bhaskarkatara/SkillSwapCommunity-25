import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const navigate = useNavigate();
  const handleLogin = () => {
    console.log({ email, password });
    // here you can add your API call
  };
   function HandleSignup()
   {
    navigate('/signup');
   }
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-300 flex flex-col">
      
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Skill Swap Community</h1>
        <div className="flex space-x-6 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Main login area */}
      <div className="flex flex-1 justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">to Your Account</h2>

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
              <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
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
              New here? <a href="#" className="text-blue-600 font-semibold hover:underline"  onClick={HandleSignup}>Sign Up</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;
