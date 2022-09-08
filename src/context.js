import React, { useEffect, useState } from 'react'

import items from './data'


const RoomContext = React.createContext();



const RoomProvider = ({children}) => {
    const [state, setState] = useState({
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
    })


    useEffect(()=> {
        let rooms= formatData(items);

        let featuredRooms = rooms.filter(room => room.featured === true)

        setState({
            rooms,
            sortedRooms: rooms, 
            featuredRooms,
            loading: false
        })
        
    }, [])

    const formatData =(items) => {

        let tempItems = items.map((item)=> {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
        
            let room= {...item.fields, images,id};

            return room;
        
        });

        return tempItems;


    }


  return (
    <RoomContext.Provider value={{state,setState}}>
    
        {children}
    
    </RoomContext.Provider>
  )
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomProvider, RoomConsumer };