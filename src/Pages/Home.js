import React from 'react'
import NavBar from '../Components/NavBar'
import TopCard from '../Components/TopCard'
import PopularAnime from '../Components/PopularAnime'
import TrendingAnime from '../Components/TrendingAnime'

import '../CSS/home.css'


function Home() {



  return (
    <div className='home'>
        <section className='main'>
         <NavBar />
         <TopCard />
         <PopularAnime />
         <TrendingAnime />
        </section>

    </div>
  )
}

export default Home