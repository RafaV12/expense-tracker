import React, { useState } from 'react';

import { Link, Navigate } from 'react-router-dom';

import { FormValues } from '../../types';
import { useAppContext } from '../../context/AppContext';

const Register = () => {
  const { user, registerUser, loading, error } = useAppContext();
  const [userValues, setUserValues] = useState<FormValues>({
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
    registerUser(userValues);
    setUserValues({
      username: '',
      password: '',
      repeatPassword: '',
    });
  };

  return (
    <div className="px-4 py-16 min-h-screen flex items-center justify-center  ">
      {/* Redirect if user is logged in */}
      {user && <Navigate to="/dashboard" replace={true} />}
      {/* Form submit error msg */}
      {error && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-7 border flex flex-col justify-center items-center text-center text-white bg-zinc-800 rounded-lg z-20">
          {error}
        </div>
      )}

      <form onSubmit={onSubmit} className="px-6 pt-6 pb-12 w-4/5 flex flex-col bg-zinc-800 rounded-lg z-10 md:w-2/4 lg:w-2/6 xl:w-1/4">
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
            className="pl-2 py-2 mt-2 w-full rounded-md outline-none text-black"
            minLength={6}
            required
          />
          <p className="mt-1 text-sm text-gray-400">At least 6 characters</p>
        </div>

        {/* Password */}
        <div className="mb-4 flex flex-col">
          <label htmlFor="password" className="text-zinc-200">
            Password
          </label>
          <input
            type="password"
            className="pl-2 py-2 mt-2 w-full rounded-md outline-none text-black"
            placeholder="Enter password"
            name="password"
            value={userValues.password}
            onChange={handleChange}
            required
            minLength={8}
          />

          {userValues.password.length === 0 ? (
            <p className="mt-1 text-sm text-gray-400">At least 8 characters</p>
          ) : userValues.password.length > 0 && userValues.password.length < 8 ? (
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
            className="pl-2 py-2 mt-2 w-full rounded-md outline-none text-black"
            placeholder="Repeat password"
            name="repeatPassword"
            value={userValues.repeatPassword}
            onChange={handleChange}
            required
            minLength={8}
          />
          {userValues.password !== userValues.repeatPassword && <p className="mt-1 text-red-500 font-md">Passwords do not match!</p>}
        </div>

        <button type="submit" disabled={loading ? true : false} className="px-4 py-2 text-white bg-purple-600 rounded-2xl">
          {loading ? 'Registering...' : 'Register'}
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
