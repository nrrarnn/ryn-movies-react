/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import { Carousel } from 'react-responsive-carousel'
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import MovieList from "../components/MovieList";
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function Home() {

  const [popularMovies, setPopularMovies] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWUzYzUwMDM4MDZjMmExZTY4MWMzZGM4ZjAwZjcxZiIsInN1YiI6IjY0ZGRmNWZkNTllOGE5MDEzOWQ2ZTYwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MjMJv167JOTj_vzoybQ8YQev1gIFMHVthdUtTFbeBVA'
    }
  };

  const fetchData = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then((data) => {
        setPopularMovies(data.results);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
        <Carousel
         autoPlay={true}
         showStatus={false}
         infiniteLoop={true}
         interval={3000}
        >
        {
        popularMovies.map(movie => (
        <Link to={`/movie/${movie.id}`}>
          <div className="posterImage relative">
             <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} className="bg-cover" alt="original image" width={'500px'}/>
          </div>
          <div className="absolute mx-auto top-0 flex justify-center items-center   w-full h-full z-50 bg-opacity-60 bg-black text-white">
          <div className="flex flex-row p-10 justify-center items-center">
          <div className="flex flex-col ">
            <div className="posterImage_title font-bold text-xl sm:text-3xl">
              {movie ? movie.original_title : ''}
            </div>
            <div className="posterImage_runtime">
              {movie ? movie.release_date : ''}
            </div>
            <div className="posterImage_runtime flex-col">
            
            <span className="posterImage_rating flex justify-center">
              {movie ? movie.vote_average : ''} <AiFillStar className="mt-1 text-yellow-400" />
            </span>
          </div>
          </div>
          </div>
          </div>
          </Link>
        ))
        }
        </Carousel>
  
      <MovieList/>
    </>
  );
}
