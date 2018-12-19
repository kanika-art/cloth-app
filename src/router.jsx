import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import BasicLayout from './layout/BasicLayout';
import WareDetail from './container/WareDetail';
import OrderForm from './container/OrderForm';
import UserInfo from './container/UserInfo'
import Address from './container/Address'
import ModifyAddress from './container/ModifyAddress'
import OrderList from './container/OrderList'
import Login from './container/Login'
import Register from './container/Register';
import AgentDetail from './container/Agent/AgentDetail';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/agent/:id" component={AgentDetail} />
      <Route path="/detail/:id" component={WareDetail} />
      <Route path="/orderForm" component={OrderForm} />
      <Route path="/userInfo" component={UserInfo} />
      <Route path="/address" component={Address} />
      <Route path="/ModifyAddress" component={ModifyAddress} />
      <Route path="/ModifyAddress/:id" component={ModifyAddress} />
      <Route path="/OrderList/:id" component={OrderList} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" component={BasicLayout} />
    </Switch>
  </Router>
);
export default Routes;
