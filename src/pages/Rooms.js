import React from 'react';
import { Banner } from '../components/Banner';
import { Hero } from '../components/Hero';
import { Link } from 'react-router-dom';





export const Rooms = () => {
  return (
    <Hero hero="roomsHero">

    <Banner title='our rooms' subtitle=''>
        <Link to="/" className='btn-primary'>
            return home
        </Link>

    </Banner>
    
    
    </Hero>
  )
}
