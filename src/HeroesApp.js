import React, { useEffect, useReducer } from 'react'
import { AuxthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

const init =()=>{
    return JSON.parse(localStorage.getItem('user'))|| {logged: false};
}

export const HeroesApp = () => {
    const [user, dispatch] = useReducer(authReducer, {}, init)

//un efecto qeu graba en el localstorage cada vez que cambia el user
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user)); 
    }, [user])

    return (
        <div>
            <AuxthContext.Provider value={{user,dispatch}}>
                <AppRouter/>
            </AuxthContext.Provider>
        </div>
    )
}
