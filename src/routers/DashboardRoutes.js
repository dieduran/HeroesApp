import React from 'react'
import { Navbar } from '../components/ui/NavBar'
import { Switch, Route, Redirect } from 'react-router'

import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';

export const DashboardRoutes = () => {
    return (
        <>
          {/* //llamo a mi menu*/}
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/marvel:heroeId" component={HeroScreen}/>
                    <Route exact path="/dc" component={DcScreen}/>

                    <Redirect to ='/marvel' />
                </Switch>
            </div>  
        </>
    )
}
