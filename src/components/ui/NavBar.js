import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {
    //extraigo el name del objeto user
    const {user:{name},dispatch} = useContext(AuthContext);
    //extraigo del react-router-dom el history (el otro da error)
    const history=useHistory(); //el contexto es el del react-router


    const handleLogut = ()=>{
        //dispatch
        dispatch({
            type: types.logout
        });
        //salgo a pagina login
        history.replace('/login');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Publishers
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                {/* para bootstrap 5 <ul className="navbar-nav ms-auto"> */}
                 <ul className="navbar-nav ml-auto">
                    <span 
                        className="nav-item nav-link" 
                    >
                        {name}
                    </span>
                    <button 
                        className="nav-item nav-link btn" 
                        onClick={handleLogut}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}