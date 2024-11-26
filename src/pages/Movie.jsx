import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ImStarFull,ImHome3 } from "react-icons/im";
import { Link } from 'react-router-dom';
import  Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function Movie() {
  const [currentMovieDetail, setMovie] = useState()
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

  useEffect(() => {
    getData()
    window.scrollTo(0, 0)
  }, [])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWUzYzUwMDM4MDZjMmExZTY4MWMzZGM4ZjAwZjcxZiIsInN1YiI6IjY0ZGRmNWZkNTllOGE5MDEzOWQ2ZTYwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MjMJv167JOTj_vzoybQ8YQev1gIFMHVthdUtTFbeBVA'
    }
  };


  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
  .then(response => response.json())
  .then(response => setMovie(response))
  .catch(err => console.error(err));
    };

    
  

  return (
    <>

  <div className='h-full relative pt-16 pb-32 flex items-center justify-center bg-black font-poppins'>
  <div className='absolute top-0 w-full h-1/2 bg-center bg-cover'> 
    <img className="w-full object-cover object-center blur-sm brightness-50" style={{height: '300px'}} src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt=""/>
  </div>
  <div className="movie-detail w-4/5 relative flex flex-wrap">
    <div className=" flex mr-4">
      <div className="movie-posterBox">
        {
          isLoading
          ?
          <div className='lg:w-72 w-44  rounded-lg shadow-xl'>
          <SkeletonTheme baseColor='#1e293b' >
                <Skeleton height={100} duration={6} />
          </SkeletonTheme>
          </div>
          :
        <img className="lg:w-72 w-44 rounded-lg shadow-xl" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
        }
      </div>
    </div>
    <div className="flex flex-wrap justify-start lg:pl-20 pl-1 pt-10 sm:w-1/2">
      <div className="mb-3">
        <div className='text-white flex font-bold lg:text-4xl text-2xl'>{currentMovieDetail ? currentMovieDetail.original_title : ''}</div>
        <div className="text-white text-md flex font-thin">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
        <div className="flex text-white font-thin text-sm"> <ImStarFull className='mt-1 text-yellow-400 mr-2'/>
          {currentMovieDetail ? currentMovieDetail.vote_average: ""} 
        </div>
        <div className="flex text-white font-thin text-sm"> {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
        <div className="flex text-white font-thin text-sm">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
        <div className=" flex flex-wrap gap-2 mt-10 ">
          {
            currentMovieDetail && currentMovieDetail.genres
            ? 
            currentMovieDetail.genres.map(genre => (
              <span key={genre.id} className="bg-indigo-600 text-white font-semibold rounded-full px-3 py-2">{genre.name}</span>
            )) 
            : 
            ""
          }
        </div>   
        <div className="flex text-white font-semibold text-xl pb-3 pt-10">Synopsis</div>
        <div className='font-thin text-white text-left'>{currentMovieDetail ? currentMovieDetail.overview : ""}
        </div>

        <div className='flex mt-20'>  
          <Link to={'/'}><span className='px-5 py-2 bg-red-700 rounded-sm text-white font-semibold'><ImHome3 className='inline-block -mt-1 mr-2'/>Homepage</span></Link>  
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}
