import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Theme';

import Navbar from './components/Navbar/Navbar';
import Dashboard from "./components/dashboard/Dashboard";
import Information from "./components/Products-catalog/info";
import Login from "./components/login/Login";
import Services from "./components/services/Services";
import Orders from './components/orders/Orders';
import Appointment from './components/services/Appointment';
import ServicesMenu from './components/services/ServicesMenu';
import ShoppingCart from "./components/dashboard/cart/ShoppingCart";
import Payment from "./components/methodPayment/Payment";


export default function App() {

  const [productAdded, setProductAdded] = useState({
    products: [],
  });

  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Navbar productAdded={productAdded} />
        <Switch>
          <Route exact path='/login' render={() => <Login />} />
          <Route exact path='/product-info/:id' render={() => <Information />} />
          <Route exact path='/services' render={() => <Services />} />
          <Route exact path='/orders' render={() => <Orders />} />
          <Route exact path='/appointment' render={() => <Appointment />} />
          <Route exact path='/menu-services' render={() => <ServicesMenu />} />
          <Route exact path='/payment' render={() => <Payment />} />
          <Route exact path='/dashboard' render={() => <Dashboard productAdded={productAdded} setProductAdded={setProductAdded} />} />
          <Route exact path='/cart' render={() => <ShoppingCart productAdded={productAdded} setProductAdded={setProductAdded} />} />
        </Switch>
      </Router >
    </ThemeProvider>
  );
}