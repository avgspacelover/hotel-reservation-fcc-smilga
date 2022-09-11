import React from 'react'

import RoomsFilter from './RoomsFilter'

import RoomsList from './RoomsList'

import { withRoomConsumer } from '../context'

import Loading from './Loading'


//ACCESSING CONTEXT THROUGH HIGHER ORDER COMPONENTS


const RoomsContainer = ({context}) => {

    const {state} = context;
    const {loading, sortedRooms, rooms} = state;

    if(loading){

        return (
            <Loading />
        )
    }

    return (
        <div>
            
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        
        </div>
    )

}


export default withRoomConsumer(RoomsContainer);



/*

import { RoomConsumer } from '../context'


const RoomsContainer = ()=> {

    return (
        <RoomConsumer>
            {
                (value)=> {

                    const {state } = value;

                    const {loading, sortedRooms, rooms} = state;
                    if(loading){

                        return (
                            <Loading />

                        )
                    }

                    return (
                        <div>
                            
                            <RoomsFilter rooms={rooms}/>
                            <RoomsList rooms={sortedRooms}/>
                        
                        </div>
                    )
                }
            }
           
        
        </RoomConsumer>
    )

}

export default RoomsContainer;


*/