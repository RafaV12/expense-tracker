import { NavLink, Link } from 'react-router-dom';

import { useAppContext } from '../context/AppContext';

const Header = () => {
  const appContext = useAppContext();

  return (
    <header className="p-4 absolute top-0 w-full flex items-center justify-between 2xl:container z-10">
      <Link to={'/'}>
        <img className="w-8 h-9" src="https://upload.wikimedia.org/wikipedia/commons/7/79/Parallel_Finance_logo.png" alt="" />
      </Link>
      <nav className="text-white">
        <NavLink to="/how-to-use" className="py-1.5 mr-4 border-b-2 border-zinc-300 text-white transition duration-150 ease-in-out hover:text-zinc-200 hover:border-zinc-400">
          How to use
        </NavLink>
        {appContext.user ? (
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? 'hidden'
                : 'px-3 py-2 text-sm text-white bg-purple-600 rounded-md transition duration-150 ease-in-out hover:bg-purple-700 hover:text-zinc-200'
            }
          >
            Dashboard
          </NavLink>
        ) : (
          <>
            <NavLink to="/login" className="px-4 py-2 mr-3 text-sm text-white bg-zinc-800 rounded-md transition duration-150 ease-in-out hover:text-zinc-200 hover:bg-zinc-900">
              Log in
            </NavLink>
            <NavLink
              to="/register"
              className="px-3 py-2 text-sm text-white bg-purple-600 rounded-md transition duration-150 ease-in-out hover:bg-purple-800 hover:text-zinc-200"
            >
              Register
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
