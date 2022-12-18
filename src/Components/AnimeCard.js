import React from 'react'
import { Link } from 'react-router-dom'

function AnimeCard({id, image, title, status, episodes, loading}) {
  if (loading) {
    return <h1>Loading</h1>
  }
  return (
    <Link
    to={`/AnimeDetails:${id}`}
    className='anime-card' id={id}>
        <p>Loading...</p>
        <img placeholder='' src={image} alt="Loading.." />
        <div className="info">
              <h5>
              {title}
              </h5>
            <div className="ratings">
                <h5>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/2258px-Love_Heart_SVG.svg.png" alt="" />
                  <h4>{status}</h4> 
                </h5>
                <p style={{marginBotton: 10}}>EP: {episodes}</p>
            </div>
        </div>
    </Link>
    
  )
}

export default AnimeCard