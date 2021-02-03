import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Product from "./pages/product";
import Cart from "./pages/Cart/index";






const Routes = () => (

    <Router>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
            <Route path="/cart" component={Cart}></Route>

        </Switch>
    </Router>


);
export default Routes;
