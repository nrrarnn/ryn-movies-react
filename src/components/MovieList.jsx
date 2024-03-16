import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import Cards from "./Cards"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWUzYzUwMDM4MDZjMmExZTY4MWMzZGM4ZjAwZjcxZiIsInN1YiI6IjY0ZGRmNWZkNTllOGE5MDEzOWQ2ZTYwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MjMJv167JOTj_vzoybQ8YQev1gIFMHVthdUtTFbeBVA'
    }
   };

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?language=en-US`, options)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className=" bg-black pb-52 lg:px-20 px-1">
            <h2 className=" text-white font-bold text-2xl pt-10">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="flex flex-wrap justify-center m-10 gap-3">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList

