import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/" className="logo">Baguette</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to='/basket' className="nav-basket">Basket</NavLink>
        </div>
    )
}

export default Navbar;