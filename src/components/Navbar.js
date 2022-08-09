import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css';

function Navbar() {
    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Characters
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="Quotes"
                            className={({ isActive }) =>
                                isActive ? activeClassName : undefined
                            }
                        >
                            Quotes
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar