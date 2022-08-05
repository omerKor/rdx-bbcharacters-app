import { NavLink } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "black" })} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "black" })} to="about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "black" })} to="blog">
                            Blog
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Layout;