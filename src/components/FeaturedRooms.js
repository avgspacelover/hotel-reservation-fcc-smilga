import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading'
import  {Room}  from './Room'
import Title from './Title'
export const FeaturedRooms = () => {

    const {state, setState} = useContext(RoomContext)
    
    const {loading, featuredRooms: rooms} = state

    console.log(state, "room", rooms)

    let roomFill = rooms.map( room => (
      <Room key={room.id} room={room} />
    ))


  return (
    <section className="featured-rooms">

      <Title title="Featured Rooms"/>
      <div className="featured-rooms-center" >
        { loading ?
          
          <Loading /> : roomFill

        }
      </div>



    </section>

  )
}
