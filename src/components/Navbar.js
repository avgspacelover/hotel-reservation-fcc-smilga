import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.svg";




export const Navbar = () => {

    const [visibility, setVisility] = useState(false);

    const handleToggle=() => {

        setVisility((state)=> !state)
    }
  return (
    <nav className='navbar'>
        <div className="nav-center">
            <div className="nav-header">
                <Link to="/"  >
                    <img src={logo} alt="Beach Resort" />
                </Link>
                <button type="button" className="nav-btn" onClick={handleToggle}>
                    <FaAlignRight className='nav-icon' />
                </button>

            </div>
            <ul className={visibility?"nav-links show-nav": "nav-links"}>

                <li>
                    <Link to ='/'>Home</Link>
                </li>

                <li>
                    <Link to="/rooms">Rooms</Link>
                </li>

            </ul>


        </div>

      

    </nav>
  )
}
