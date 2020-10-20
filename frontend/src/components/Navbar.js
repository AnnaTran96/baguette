import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/NavbarStyle.css'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/" className="logo">Vieguette's</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to='/basket' className="nav-basket"><i className="fa fa-shopping-cart" aria-hidden="true"></i></NavLink>
        </div>
    )
}

export default Navbar;