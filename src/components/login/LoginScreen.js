import React, { useContext } from 'react'
import { AuxthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuxthContext)

    const handleLogin=()=>{
        //history.push('/'); // a que ruta quiero ir
        dispatch({
            type: types.login,
            payload: {
                name: 'Diego'
            }
        });
        history.replace('/');
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
