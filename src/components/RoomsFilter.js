import React, {useContext} from 'react'

import { RoomContext } from '../context'; 
import Title from './Title';


const getUnique = (items, value)=> {

    return [...new Set(items.map(item=> item[value])) ]

}


const RoomsFilter = ({rooms}) => {

const context = useContext(RoomContext) ;

const {
    state,
    handleChange,
    
} = context

const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
} = state;

    let types= getUnique(rooms,'type');

    types= ['all', ...types]

    types = types.map((item,index)=> (
        <option value={item}  key = {index}>{item}</option>
    ))
    console.log(state);

  return (
    <section className="filter-container">
    
        <Title title="search-rooms" />
        <form className="filter-form">

            {}
            <div className='form-group'> 

                <label htmlFor='type'>Room Type</label>
                <select 
                    name="type" 
                    id="type" 
                    value={type} 
                >
                    {types}

                </select>
            </div>
            {}
        </form>

    </section>
  )
}


export default RoomsFilter;