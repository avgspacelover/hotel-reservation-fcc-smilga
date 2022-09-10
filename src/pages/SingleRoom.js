import React , {useContext, useState}from 'react'

import defaultBcg from "../images/room-1.jpeg";
import {Hero} from "../components/Hero";
import {Banner} from "../components/Banner";
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "../context";

import StyledHero from '../components/StyledHero';


export const SingleRoom = () => {

  const {slug} = useParams();
  console.log(slug)


  const {roomState, setRoomState} = useState({
    slug: slug,
    defaultBcg
  })

  const {state, setState, getRoom}= useContext(RoomContext)



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


const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;


  return (

    <>


      <StyledHero img={images[0] || defaultBcg}>
        <Banner title= {`${name} room`} >
        <Link to="/rooms" className="btn-primary">
            back to rooms
        </Link>
        </Banner> 
      </StyledHero>
      <section className="single-room" >
        <div className='single-room-images'>

          {images.map((image,index)=> (
              <img key={index} src={image} alt={name} />
          ))}

        </div>
      </section>

    </>
  )
}
