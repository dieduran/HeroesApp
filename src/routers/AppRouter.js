//es el principal
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/NavBar';

export const AppRouter = () => {
    return (
        <Router>
          <div>
          {/* //llamo a mi menu*/}
            <Navbar/> 
            <Switch>
                <Route exact path='/login' component={LoginScreen} />
                <Route exact path='/' component={MarvelScreen} />
            </Switch>
          </div>
        </Router>
      )
}