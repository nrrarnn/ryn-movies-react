import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { ImStarFull } from "react-icons/im";
import Skeleton,{ SkeletonTheme } from 'react-loading-skeleton';



const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

  return (
    <>
      {
        isLoading
        ?
        <div className="relative mt-10 flex lg:w-44 w-32 flex-col rounded-xl shadow-md h-44">
            <SkeletonTheme color="#000000" highlightColor="#525252">
                <Skeleton height={400} duration={5} />
            </SkeletonTheme>
        </div>
        :
      <Link to={`/movie/${movie.id}`}>
        <div className="relative mt-10 flex lg:w-44 w-32 flex-col rounded-xl  text-white shadow-md hover:scale-110 hover:transition hover:duration-700 duration-300 ease-in">
          <div className="rounded-xl">
            <img src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt="img-blur-shadow" layout="fill" className='rounded-lg' />
          </div>
          <div className="p-2"> 
              <p className="flex justify-center font-thin">
                {movie?movie.vote_average.toFixed(1):''} <ImStarFull className='mt-1 p-[2px] text-yellow-400'/>
              </p>
            <h5 className="mb-2 block  lg:text-md text-sm font-semibold">
              {movie?movie.original_title:''}
            </h5>
          </div>
        </div>
      </Link>
      }
    </>
  );

}
export default Cards;
                