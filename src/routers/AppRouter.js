//es el principal
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <Router>
          <div>
            <Switch>
                <Route exact path='/login' component={LoginScreen} />
                {/* cualquier otra cosa va al segundo navegador . ojo con no poner exact */}
                <Route path='/' component={DashboardRoutes} /> 
            </Switch>
          </div>
        </Router>
      )
}
