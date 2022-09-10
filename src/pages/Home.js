import React from 'react'
import { Link } from 'react-router-dom'
import { Banner } from '../components/Banner'
import { FeaturedRooms } from '../components/FeaturedRooms'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'



export const Home = () => {
  return (
    <div>


        <Hero hero='roomsHero' >

            <Banner title='luxurious rooms' subtitle='deluxe rooms starting at $299'>

                <Link to='/' className='btn-primary'>
                    our rooms
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />

    </div>
  )
}
