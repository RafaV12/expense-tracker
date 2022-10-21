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
        {appContext.user ? (
          <NavLink to="/dashboard"></NavLink>
        ) : (
          <>
            <NavLink to="/login" className="px-4 py-1.5 mr-3 text-sm  text-white border-2 border-zinc-600 rounded-md">
              Log in
            </NavLink>
            <NavLink to="/register" className="px-3 py-2 text-sm text-white bg-zinc-600 rounded-md">
              Register
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
