import React from 'react'
import { useNavigate } from 'react-router-dom'
import banner from "../assets/banner.jpg"
import Category from './Category'

const Home = () => {
  const navigate = useNavigate()
 
  return (
    <>
    <div className='home'>
        <img src={banner} alt="" />
        <div className="home__name">
            <h1 className='home__bannerName'>The Marwar Bazzar</h1>
            <button onClick={() => navigate('/products')}>Shop Now</button>
        </div>
    </div>
    <Category />
    
    </>
  )
}

export default Home