import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Register = () => {
  const [userValues, setUserValues] = useState({
    username: '',
    password: '',
    repeatPassword: '',
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
        <div className="mb-4 flex flex-col">
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

          {userValues.password.length === 0 ? (
            <p className="mt-1 text-sm text-gray-400">At least 5 characters</p>
          ) : userValues.password.length > 0 && userValues.password.length < 5 ? (
            <p className="mt-1 text-red-500 font-md">Password is weak!</p>
          ) : (
            <p className="mt-1 text-green-500 font-md">Password is good!</p>
          )}
        </div>

        {/* Repeat password */}
        <div className="mb-8 flex flex-col">
          <label htmlFor="repeat-password" className="text-zinc-200">
            Repeat Password
          </label>
          <input
            type="password"
            className="pl-2 py-2 mt-2 w-full rounded-md outline-none"
            placeholder="Repeat password"
            name="repeatPassword"
            value={userValues.repeatPassword}
            onChange={handleChange}
            required
          />
          {userValues.password !== userValues.repeatPassword && <p className="mt-1 text-red-500 font-md">Passwords do not match!</p>}
        </div>

        <button
          type="submit"
          disabled={userValues.password !== userValues.repeatPassword ? true : false}
          className="px-4 py-2 text-white bg-purple-600 rounded-2xl"
        >
          Register
        </button>

        <p className="mt-7 text-slate-100">
          Already have an account?
          <Link to={'/login'} className="ml-2 underline">
            Log in!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
