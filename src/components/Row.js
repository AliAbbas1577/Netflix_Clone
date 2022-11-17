import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Row.css'
import YouTube from 'react-youtube'
const base_url="http://image.tmdb.org/t/p/original/"
const Row = ({title,fetchURL,isLargeRow}) => {
    //state is reset when component load...
    //short term memmory why to write variable in react...
    const [movies,setmovies]=useState([]);

    //if [],run once when row load and dont run again
    useEffect(()=>{
        async function fetchData(){
            const request =await axios.get(fetchURL)
            setmovies(request.data.results)
            return request
        }
        fetchData()
    },[fetchURL])
    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1
        }
    }
  return (
        <div className='row'>
            <h2 className='row__title'>{title}</h2>
            <div className='row__posters'>
                {/* <img src="pic_trulli.jpg" alt="Trulli" width="500" height="333"></img> */}
                {/* <img src={`${base_url}${movies.backdrop_path}`} alt={movies[0].title}></img> */}
                 {movies.map(m=>{

                    return <img key={m.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow?m.poster_path :m.backdrop_path}`} alt="Trulli" ></img>
                })} 
            </div>
            <YouTube videoId='vCTt_PnWHPg' opts={opts} />
        </div>
  )
}

export default Row