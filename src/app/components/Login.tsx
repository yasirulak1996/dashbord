

"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Hardcoded credentials for demonstration purposes
    const validEmail = '123@gmail.com';
    const validPassword = 'y123@';

    // Simple validation check
    if (email === validEmail && password === validPassword) {
      // Set a token or flag in localStorage to simulate logged-in state
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/pages/Dashboard'); // Redirect to dashboard on success
    } else {
      setErrors('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-600">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          {errors && <p className="text-red-500 text-sm">{errors}</p>}

          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;