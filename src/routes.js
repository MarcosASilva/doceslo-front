import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import  Inicio  from '../src/pages/Inicio'
import Doces from './pages/Doces';
import Bolos from './pages/Bolos';

const routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component ={Inicio} />
            <Route path='/doces' exact component ={Doces} />
            <Route path='/bolos' exact component ={Bolos} />
            
        </Switch>
        </BrowserRouter>
    )
}
export default routes;