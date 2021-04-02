//es el principal
import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { AuthContext} from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {

    const {user} = useContext(AuthContext)
    return (
        <Router>
          <div>
            <Switch>
                 {/* /// cambiado... si NO valida recien va.. */}
                {/* <Route exact path='/login' component={LoginScreen} /> */}
                <PublicRoute 
                    exact path='/login' 
                    component={LoginScreen} 
                    isAuthenticated={user.logged}
                />
                
                {/* cualquier otra cosa va al segundo navegador . ojo con no poner exact */}

                 {/* /// cambiado... si valida recien va.. */}
                {/* <Route path='/' component={DashboardRoutes} />  */}
                <PrivateRoute 
                  path='/' 
                  component={DashboardRoutes} 
                  isAuthenticated={user.logged}
                  /> 
            </Switch>
          </div>
        </Router>
      )
}
