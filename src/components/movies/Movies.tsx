import { useEffect } from "react"
import Movielist from "./Movielist"

type MovieT = {
    id: string,
    movie: string,
}
const Movies = () => {

    const moviedata = [
        {id: "1", movie: "The lost city"},
        {id: "2", movie: "The adam project"},
        {id: "3", movie: "Uncharted"},
        {id: "4", movie: "Black adam"},
        {id: "5", movie: "Prey"},
        {id: "6", movie: "The batman"},
    ]

    // useEffect(()=>{

    // })

    return (
        <div>
        <h1>List of movies</h1>
        <Movielist movies={moviedata}/>
        </div>
    )
}

export default Movies;