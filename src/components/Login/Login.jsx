import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { v4 as uuidv4 } from 'uuid'; 
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      const token = uuidv4();
      const refreshToken = uuidv4();
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      navigate('/dashboard');
    } else {
      setError('Invalid credentials'); 
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            <Link to='/forget-password' className="text-blue-500 hover:text-blue-700 text-sm">Forget Password</Link>


          </div>
          {error && (
                <div className="bg-red-100 border-t-4 mt-3 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md">
                    <div className="flex items-center">
                    <div className="mr-4">
                        <svg
                        className="fill-current h-6 w-6 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM9 9V7h2v4H9V9zm0 6h2v2H9v-2z"
                        />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm">Invalid username or password!</p>
                    </div>
                    <div className="ml-auto">
                        <button
                        onClick={() => setError(null)}
                        className="text-red-500 hover:text-red-700 focus:outline-none"
                        >
                        <svg
                            className="fill-current h-6 w-6"
                            role="button"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <title>Close</title>
                            <path
                            fillRule="evenodd"
                            d="M14.35 14.35a1 1 0 0 1-1.41 0L10 11.41l-2.94 2.94a1 1 0 1 1-1.41-1.41L8.59 10 5.65 7.06a1 1 0 0 1 1.41-1.41L10 8.59l2.94-2.94a1 1 0 0 1 1.41 1.41L11.41 10l2.94 2.94a1 1 0 0 1 0 1.41z"
                            />
                        </svg>
                        </button>
                    </div>
                    </div>
                </div>
                )}

        </form>
      </div>
    </div>
  );
};

export default Login;
