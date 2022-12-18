import React from 'react'
import Chainsaw from '../Images/chainsaw.jpeg'


function TopCard() {
  return (
     <div className='current'>
                <img src={Chainsaw} alt="" />
                <div className="overlay">
                    <h2>Top Ongoing: </h2>
                    <h1>Chainsaw Man</h1>
                    <h3>Genres: Action, Fantasy, Gore, Shounen</h3>
                </div>
            </div>
  )
}

export default TopCard