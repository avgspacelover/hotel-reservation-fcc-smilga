import React from 'react';
import { Banner } from '../components/Banner';
import { Hero } from '../components/Hero';
import { Link } from 'react-router-dom';


export const ErrrorPage = () => {
  return (
    <div>
      <Hero >
        <Banner  title='' subtitle='page not found'>
          <Link to='/' classname='btn-primary' >
              return home
          </Link>
        </Banner>
      </Hero>
    </div>
  )
}
