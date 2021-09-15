import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import TopMenu from './components/TopMenu';
import Products from './components/Products';
import Cart from './components/Cart'


export default function Routes() {
    return (
        <Router>
            <TopMenu />
            <Switch>
                <Route exact path="/" component={Products}>
                    <Products />
                </Route>
                <Route exact path="/carrito" component={Cart}>
                    <Cart />
                </Route>
            </Switch>
        </Router>
    );
}
