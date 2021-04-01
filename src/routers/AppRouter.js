//es el principal
import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthContext} from '../auth/AuthContext';

export const AppRouter = () => {

    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <Router>
          <div>
            <Switch>
                <Route exact path='/login' component={LoginScreen} />
                {/* cualquier otra cosa va al segundo navegador . ojo con no poner exact */}

                 {/* /// agregado... si valida recien va.. */}
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
