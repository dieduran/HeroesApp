import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
    } )=>{


    //cada vez que pasamos por aca grabamos la pagina en el local storage
    localStorage.setItem('lastPath',rest.location.pathname);
    return (
        <Route {...rest}
        component={ (props) => (
            //si esta auticado.. devuelve el componente.. si no ..login
            (isAuthenticated)           
                ? (<Component {...props} />)
                : (<Redirect to="/login" />)
        )}
        />
    )
}

//para que sea obligatorio el tipo
PrivateRoute.protoTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
