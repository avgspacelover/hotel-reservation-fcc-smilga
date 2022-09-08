import React from 'react'

export const Hero = ({children, hero}) => {
  return (
    <header className={hero}>
        {children}
    </header>
  )
}


Hero.defaultProTypes= {
    hero: "defaultHero"
}