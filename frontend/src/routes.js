import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Writer from './pages/Write'
import Main from './pages/Main'
import NotFound from './pages/NotFound'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/new" component={Writer} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}