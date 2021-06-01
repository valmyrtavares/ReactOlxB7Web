import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/about'

import NotFound from  './pages/NotFound'


export default () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/about">
                <Sobre/>
            </Route>
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    )
}