
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed -z-50 top-0 right-0 h-full w-2/4 bg-slate-800 text-white font-poppins transition duration-300 lg:hidden">
      <ul className="py-14">
        <li className="mb-4">
          <Link to="/" className="flex pl-4 hover:underline hover:text-indigo-400">
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/movies/popular" className="flex pl-4 hover:underline hover:text-indigo-400">
            Popular
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/movies/top_rated" className="flex pl-4 hover:underline hover:text-indigo-400">
            Top Rated
          </Link>
        </li>
        <li className='mb-4'>
          <Link to="/movies/upcoming" className="flex pl-4 hover:underline hover:text-indigo-400">
            Upcoming
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
