import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Deaths from '../components/Deaths/Deaths';
import Episodes from '../components/Episodes/Episodes';
import Quotes from '../components/Quotes/Quotes';
import User from '../components/Users/Users';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/users">
                <User/>
            </Route>
            <Route path = '/deaths'>
                <Deaths/>
            </Route>
            <Route path = '/episodes'>
                <Episodes/>
            </Route>
            <Route path = '/quotes'>
                <Quotes/>
            </Route>
            <Redirect to="/users"/>
        </Switch>
    )
}