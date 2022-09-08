import React, {useState} from 'react'
import Title  from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'



export const Services = () => {


    const [services, setServices] = useState([
        {
            icon: <FaCocktail />,
            title: "Complimentary Cocktails",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            icon: <FaHiking />,
            title: "Trail Hiking",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            icon: <FaShuttleVan />,
            title: "free Shuttle",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            icon: <FaBeer />,
            title: "Beer",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ])
  return (
    <section className='services'>
        <Title title='services' />

        <div className='services-center'>
            {services.map((item, index)=> {
                return <article key={index} className="service" >
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article>
            })}
        </div>
    </section>
  )
}
