import React, {useEffect, useState} from 'react'
import axios from 'axios'
import AnimeCard from '../Components/AnimeCard'


function PopularAnime() {

    const [data , setData]= useState([])
    const [loading , setLoading]= useState(false)
    const [pages , setPages]= useState(10)

useEffect(()=>{
    setLoading(true)
    axios.get(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${pages}`).then(function (response) {
        const responseData = response.data.data
            setData(responseData)
    }).catch(function (error) {
        console.error(error);
    }).then(setLoading(false))
},[pages])

  return (
    <>
    <h1 className='anime-type' style={{marginTop: 20 , marginBottom: 20, color: 'white'}}>
               Most Popular :
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
            <div className="paging">
                <button
                className={pages <= 10 ? 'btn-disabled' : 'paging-btn'}
                onClick={()=>{setPages(prev => prev-10)}}
                >Prev</button>
                <h3>{pages / 10}</h3>
                <button
                className={pages >= 1000 ? 'btn-disabled' : 'paging-btn'}
                onClick={()=>setPages(prev => prev+10)}
                >Next</button>
            </div></>
  )
}

export default PopularAnime