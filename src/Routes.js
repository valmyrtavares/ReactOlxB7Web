import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/about'

import NotFound from  './pages/NotFound'
import SingiIn from './pages/SingIn/index'
import SingiUp from './pages/SignUp/index'


export default () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/about">
                <Sobre/>
            </Route>
            <Route exact path="/signin">
                <SingiIn/>
            </Route>
            <Route exact path="/signup">
                <SingiUp/>
            </Route>
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    )
}