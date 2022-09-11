import React, { useEffect, useState } from 'react'

import items from './data'


const RoomContext = React.createContext();



const RoomProvider = ({children}) => {
   
    const [state, setState] = useState({
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    })


    const formatData =(items) => {

        let tempItems = items.map((item)=> {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
        
            let room= {...item.fields, images,id};

            return room;
        
        });

        return tempItems;


    }

  
    useEffect(()=> {
        

        let rooms= formatData(items);

        let featuredRooms = rooms.filter(room => room.featured === true)

        let maxPrice = Math.max(...rooms.map((item)=> item.price))

        let maxSize = Math.max(...rooms.map((item)=> item.size))


        setState({
            rooms,
            sortedRooms: rooms, 
            featuredRooms,
            loading: false,
            price: maxPrice,
            maxPrice: maxPrice,
            maxSize: maxSize
        })

        console.log("render")
    },[])

    let handleChange= (e)=> {


        const target =  e.target;
        const value= e.type === 'checkbox'? target.checked : target.value ;
        //const type = e.target.type;
        const name = e.target.name;

       // const value = e.target.type;
    //    this.setState({
    //     [name]: value
    //    }, filterRooms) //filteRooms is a function 
       
       
       setState(state=> (
            {
                ...state,
                [name]: value,
            }
        ), filterRooms)

    }

    let filterRooms = ()=> {
        console.log("ji")
    }

    const getRoom = (slug)=> {

        let tempRooms = [...state.rooms]

        const room = tempRooms.find(room => room.slug === slug)


        return room;


    }


  return (
    <RoomContext.Provider value={{state,setState,getRoom, handleChange}}>
    
        {children}
    
    </RoomContext.Provider>
  )
}

const RoomConsumer = RoomContext.Consumer;


export function withRoomConsumer(Component){

    return function ConsumerWithWrapper(props){

        return <RoomConsumer>
            { value => <Component {...props} context={value} /> }
        </RoomConsumer>

    }

}




export { RoomContext, RoomProvider, RoomConsumer };