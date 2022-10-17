import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Login = () => {
  const [userValues, setUserValues] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setUserValues({
      ...userValues,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className="px-4 py-16 min-h-screen flex items-center justify-center">
      <form onSubmit={onSubmit} className="px-6 pt-6 pb-12 w-4/5 flex flex-col bg-zinc-800 rounded-lg z-10">
        {/* Username */}
        <div className="mb-4 flex flex-col">
          <label htmlFor="name" className="text-zinc-200">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            name="username"
            value={userValues.username}
            onChange={handleChange}
            className="pl-2 py-2 mt-2 w-full rounded-md outline-none"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-8 flex flex-col">
          <label htmlFor="password" className="text-zinc-200">
            Password
          </label>
          <input
            type="password"
            className="pl-2 py-2 mt-2 w-full rounded-md outline-none"
            placeholder="Enter password"
            name="password"
            value={userValues.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="px-4 py-2 text-white bg-purple-600 rounded-2xl">
          Login
        </button>

        <p className="mt-7 text-slate-100">
          Already have an account?
          <Link to={'/register'} className="ml-2 underline">
            Log in!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
