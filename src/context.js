import React, { Component } from "react";
import items from "./data";
//import Client from "./Contentful";

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
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
  };

  // getData = async () => {
  //   try {
  //     let response = await Client.getEntries({
  //       content_type: "beachResortRoom"
  //     });
  //     let rooms = this.formatData(response.items);

  //     let featuredRooms = rooms.filter(room => room.featured === true);
  //     //
  //     let maxPrice = Math.max(...rooms.map(item => item.price));
  //     let maxSize = Math.max(...rooms.map(item => item.size));
  //     this.setState({
  //       rooms,
  //       featuredRooms,
  //       sortedRooms: rooms,
  //       loading: false,
  //       //
  //       price: maxPrice,
  //       maxPrice,
  //       maxSize
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  componentDidMount() {
    // this.getData();
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    //
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      //
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    let tempRooms = [...rooms];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);
    //filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    this.setState({
      sortedRooms: tempRooms
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          state: this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}









































































/*

import React, {useEffect,useState} from 'react'
//import {useStateWithCallbackLazy } from 'use-state-with-callback'
//import { useState } from 'react-usestateref';
import items from './data'
let firstRender = true;

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

const handleChange= async(e)=> {

        console.log("EVENT TARGET", e.target, e.target.value)

        const target =  e.target;
        const value= e.type === 'checkbox'? target.checked : target.value ;

        const name = e.target.name;

       // const value = e.target.type;
    //    this.setState({
    //     [name]: value
    //    }, filterRooms) //filterRooms is a function 
       
       console.log("VALUE", value)
        setState(state=> {
            console.log("why",state)
           return {
                ...state,
                [name]: value,
            }
        })

       setTimeout(()=>console.log("apparent",state),10000)


    }

    // 04:18:38
    useEffect(()=> {

        console.log("hello",state)
        //if((state.type === 'all' && !firstRender)|| state.type !== 'all'){
           // firstRender= false;
            filterRooms()
        //}
    },[])
   
    let filterRooms = ()=> {
        console.log("filterRoom render", state)
        let {
            rooms, 
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        }= state


        let tempRooms = [...rooms];

        if(type!== 'all'){


            let tempItems = tempRooms.filter(room => room.type === type)
            console.log("MEEEEEEEE",type, tempItems)
            setState(state => ( 
                
            {
                ...state,
                sortedRooms: tempItems
            }
            
            ))
        }
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
*/