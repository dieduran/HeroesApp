import React from 'react'

export const LoginScreen = ({history}) => {

    const handleLogin=()=>{
        console.log(history);
        history.push('/'); // a que ruta quiero ir
        
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
