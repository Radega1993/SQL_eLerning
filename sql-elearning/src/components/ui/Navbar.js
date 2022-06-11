import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {

    const handleLogout = () => {
      console.log('Logout');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                SQL eLearning
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className="nav-item nav-link"
                        to="/"
                    >
                        Documentación
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/memory"
                    >
                        Memory
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/sort"
                    >
                        Reordenar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                      Raül
                    </span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
