import React , {useContext}from 'react'

import defaultBcg from "../images/room-1.jpeg";

import {Banner} from "../components/Banner";
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "../context";

import StyledHero from '../components/StyledHero';


export const SingleRoom = () => {

  const {slug} = useParams();
  console.log(slug)

  const { getRoom}= useContext(RoomContext)



  const room = getRoom(slug)
  console.log(room)


  if (!room) {
    return (
      <div className="error">
        <h3> no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }


const {
  name, 
  description, 
  capacity, 
  size, 
  price, 
  extras, 
  breakfast, 
  pets, 
  images
} = room;

  const [mainImg,...defaultImg] = images


  return (

    <>


      <StyledHero img={mainImg || defaultBcg}>
        <Banner title= {`${name} room`} >
        <Link to="/rooms" className="btn-primary">
            back to rooms
        </Link>
        </Banner> 
      </StyledHero>
      <section className="single-room" >
        <div className='single-room-images'>

          {defaultImg.map((image,index)=> (
              <img key={index} src={image} alt={name} />
          ))}

        </div>

        <div className='single-room-info' >
          <article className='description'>
            <h3>Details</h3>
            <p>{description}</p>
          </article>

          <article className='info'>
            <h3>Info</h3>

            <h6>Price: ${price}</h6>

            <h6>Size: {size} SQFT</h6>

            <h6>Max Capacity: {" "}
                {capacity>1 ? `${capacity} people`: `${capacity} person`}
            </h6>

            <h6>Pets: {pets? 'Pets allowed' : 'No pets allowed'}</h6>

            <h6>Breakfast: {breakfast && "free brealfast included" }</h6>

            <h6>Size: ${size}</h6>


          </article>
        </div>
      </section>
      <section className='room-extras'>
        <h6>extras</h6>
        <ul className='extras'>
          {extras.map((item, index)=> (
              <li key={index} > {item} </li>
          ))}
        </ul>
      </section>

    </>
  )
}
