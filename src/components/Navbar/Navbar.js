import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return <ul>
        <li><NavLink to='/messages'>Messages</NavLink></li>
        <li><NavLink to='/users'>Users</NavLink></li>
        <li><NavLink to='/messagesLocalState'>messagesLocalState</NavLink></li>
    </ul>
}
export default Navbar;