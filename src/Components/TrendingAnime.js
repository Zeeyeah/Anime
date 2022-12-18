import React, {useEffect, useState} from 'react'
import axios from 'axios'
import AnimeCard from '../Components/AnimeCard'


function PopularAnime() {

    const [data , setData]= useState([])
    const [loading , setLoading]= useState(false)
    const [pages]= useState(0)

useEffect(()=>{
    setLoading(true)
    axios.get(`https://kitsu.io/api/edge/trending/anime`).then(function (response) {
        const responseData = response.data.data
            console.log(responseData[0])
            setData(responseData)
    }).catch(function (error) {
        console.error(error);
    }).then(setLoading(false))
},[pages])

  return (
    <>
    <h1 className='anime-type' style={{marginTop: 20 , marginBottom: 20, color: 'white'}}>
               Top 10 Trending:
            </h1>
            <div className="popular">
                {data.map(anime => {
                    return(
                            <AnimeCard
                            id={anime.id}
                            image = {anime.attributes.posterImage?.original} 
                            title= {anime.attributes.canonicalTitle} 
                            status = {anime.attributes?.favoritesCount}
                            episodes = {anime.attributes?.episodeLength}
                            loading = {loading}
                            />
                    )
                })}
            </div>
        </>
  )
}

export default PopularAnime