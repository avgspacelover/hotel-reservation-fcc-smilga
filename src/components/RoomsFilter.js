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

    let people = getUnique(rooms, 'capacity')
    people= people.map((item, index)=> {
        return <option key={index} value={item}>{item}</option>
    })

  return (
    <section className="filter-container">
    
        <Title title="search-rooms" />
        <form className="filter-form">


            <div className='form-group'> 

                <label htmlFor='type'>Room Type</label>
                <select 
                    name="type" 
                    id="type" 
                    value={type} 
                    onChange={handleChange}
                    className="form-control"
                >
                    {types}

                </select>
            </div>
              <div className='form-group'> 

                <label htmlFor='capacity'>Guests</label>
                <select 
                    name="capacity" 
                    id="capacity" 
                    value={capacity} 
                    onChange={handleChange}
                    className="form-control"
                >
                    {people}

                </select>
            </div>

            <div className='form-group'> 

                <label htmlFor='price'>Room Price ${price}</label>
                <input 
                    type="range"
                    name="price" 
                    min={minPrice}
                    max={maxPrice}

                    id="price" 
                    value={price} 
                    onChange={handleChange}
                    className="form-control"
                />
            
            </div>


            <div className='form-group'> 

                <label htmlFor='size'>Room Size</label>
                <div className="size-inputs">
                <input 
                    type="number"
                    name="minSize" 
                    value={minSize}
                    max={maxSize}
                    id="size" 
                    onChange={handleChange}
                    className="size-input"
                />

                <input 
                    type="number"
                    name="maxSize" 
                    value={maxSize}
                    id="size" 
                    onChange={handleChange}
                    className="size-input"
                />
                </div>
            
            </div>


            <div className='form-group'> 

                <div className="single-extra">
                    <input 
                       type="checkbox"
                       name="breakfast" 
                        value={breakfast}
                        id="breakfast" 
                     onChange={handleChange}
                        className="size-input"
                    />
                    <label htmlFor='breakfast'>Breakfast</label>
                </div>

                <div className="single-extra">

                    <input 
                        type="checkbox"
                        name="pets" 
                       value={pets}
                        id="pets" 
                           onChange={handleChange}
                      className="size-input"
                    />
                    <label htmlFor='pets'>Pets</label>

                </div>
            
            </div>


            

        </form>

    </section>
  )
}


export default RoomsFilter;