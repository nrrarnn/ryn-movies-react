import { Link } from 'react-router-dom';
import { Component } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Sidebar from './Sidebar';

class Header extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className='top-0 left-0 w-full px-2 bg-slate-800 fixed z-50'>
           <div className='flex justify-between items-center text-white py-5 px-20'>
             <div className='font-poppins font-bold text-lg tracking-tight'>
              Rin<span className='text-indigo-400'>Movie</span>
            </div>   
          
          <ul className='lg:flex hidden font-poppins text-sm w-2/5 justify-between'>
            <Link to='/' className='hover:underline hover:text-indigo-400 transition duration-300'>
              <li>Home</li>
            </Link>

            <Link to='/movies/popular' className='hover:underline hover:text-indigo-400 transition duration-300'>
              <li>Popular</li>
            </Link>

            <Link to='/movies/top_rated' className='hover:underline hover:text-indigo-400 transition duration-300'>
              <li>Top Rated</li>
            </Link>

            <Link to='/movies/upcoming' className='hover:underline hover:text-indigo-400 transition duration-300'>
              <li>Upcoming</li>
            </Link>
          </ul>
          <div id='mobile' className='flex  lg:hidden' onClick={this.handleClick}>
            <i> {this.state.clicked ? <HiX /> : <HiMenu />}</i>
            </div>
            {this.state.clicked && <Sidebar />}
          </div> 
      </nav>
    );
  }
}

export default Header;
