import React from 'react';
import {NavLink} from 'react-router-dom'; 


const Navbar = props => {
    return <ul>
        <li><NavLink to='/messages'>Message</NavLink></li>
        <li><NavLink to='/profile'>Profile</NavLink></li>
    </ul>
}
export default Navbar