import React from "react";
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
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/product-info/:id">
            <Information />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/menu-services">
            <ServicesMenu />
          </Route>
          <Route path="/cart">
            <ShoppingCart />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
        </Switch>
      </Router >
    </ThemeProvider>
  );
}