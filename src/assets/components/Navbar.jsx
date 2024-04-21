import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container-fluid">
                <img 
                    src="./src/assets/img/location.png" 
                    alt="pokemon-location" 
                    width={50}
                />
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => (isActive ? "activo" : "inactivo")}
                                to="/"
                            >
                            Home
                            </NavLink>
                        </li>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => (isActive ? "activo" : "inactivo")}
                                to="/pokemones"
                            >
                            Pokemones
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar