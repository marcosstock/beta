import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Main from './pages/Main';
import Ajuda from './pages/Ajuda';
import Quemsomos from './pages/Quemsomos';

export default function Routes(){
    return (

        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/main" exact component={Main} />
                <Route path="/quemsomos" exact component={Quemsomos} />
                <Route path="/ajuda" exact component={Ajuda} />
            </Switch>
        </BrowserRouter>
        


);
}