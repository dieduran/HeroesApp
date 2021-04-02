import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext)

    const handleLogin=()=>{
        //history.push('/'); // a que ruta quiero ir
        
        //ahora cambiamos.. comentamos
        //history.replace('/'); 
        //y usamos otra pagina para ingresar..la ultima grabada
        //si no tenemos nada.. al / como antes
        const lastPath =localStorage.getItem('lastPath')|| '/';
        history.replace(lastPath); 
        dispatch({
            type: types.login,
            payload: {
                name: 'Diego'
            }
        });
    }

    return (
        <div className='container mt-5'>
            <h1>Login Screen</h1>
            <hr/>
            <button
                className='btn btn-primary'
                onClick={handleLogin}
            >
            Login
            </button>
        </div>
    )
}
