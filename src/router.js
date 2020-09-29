import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Main from './Pages/Main';
import Ajuda from './Pages/Ajuda';
import Quemsomos from './Pages/Quemsomos';

export default function Routes(){
    return (

        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/main" component={Main} />
                <Route path="/quemsomos" component={Quemsomos} />
                <Route path="/ajuda" component={Ajuda} />
            </Switch>
        </BrowserRouter>
        


);
}