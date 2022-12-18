import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

function AnimeDetails() {
    const {id} = useParams()
    const [data , setData]= useState([])
    console.log(id.slice(8))
    
    useEffect(()=>{
    axios.get(`https://kitsu.io/api/edge/anime/${id.slice(8)}`).then(function (response) {
        const responseData = response.data.data
            console.log(responseData)
            setData(responseData)
    }).catch(function (error) {
        console.error(error);
    })
},[id])
  return (
    <div style={{backgroundColor: '#252a40', paddingTop: 10}}>
         <nav style={{marginBotton: 10}}>
            <h1>
            <Link style={{color: 'white', textDecoration: 'none', marginBottom: 0}} to={'/Home'}>Go Back</Link>
            </h1>
                
            <ul>
                <li>All</li>
                <li>Movies</li>
                <li>Popular</li>
                <li>Dub</li>
                <li>Airing</li>
            </ul>
            </nav>
    <img className='cover-image' src={data.attributes?.coverImage?.large} alt="" />
    <div className='anime-details' >
         <img className='poster-image' src={data.attributes?.posterImage?.original} alt="" />
        <div className="anime-info">
         <button className="watch-btn">Watch</button>
         <h2>{data.attributes?.canonicalTitle}</h2>
         <h4 style={{opacity: '50%', marginTop: 5}}>{data.attributes?.titles?.ja_jp}</h4>
         <h5 style={{opacity: '50%'}}>Popularity Rank: {data.attributes?.popularityRank}</h5>
         <h5 style={{opacity: '60%', fontWeight: 400, marginTop: 5}}>Status: {data.attributes?.status}</h5>
         <h5 style={{opacity: '60%', fontWeight: 400, marginTop: 5}}>Total Episodes: {data.attributes?.episodeCount}</h5>
         <h5 style={{opacity: '60%', fontWeight: 400, marginTop: 5, marginBottom: 5}}>Episodes Duration: {data.attributes?.episodeLength}</h5>
        </div>
        <div className="synopsis">
            <h1>Synopsis:</h1>
            <p style={{opacity: '80%', fontSize: 14}}>{data.attributes?.synopsis}</p>
            <br />
            <p style={{opacity: '80%', fontSize: 14}}>{data.attributes?.description}</p>
        </div>
        <div className="more-info">
            <h1>More Info:</h1>
            <p>Start Date: <b> {data.attributes?.startDate} </b></p>
            <p>End Date: <b> {data.attributes?.endDate} </b></p>
            <p>Age Rating: <b>{data.attributes?.ageRating}</b> </p>
            <p>NSFW: <b>{data.attributes?.nsfw ? 'true' : 'false'}</b> </p>
        </div>
    </div>
    </div>
  )
}

export default AnimeDetails