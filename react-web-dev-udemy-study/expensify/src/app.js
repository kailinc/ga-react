import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    DashBoard Component
  </div>
)

const Contacts = () => (
  <div>
    Contacts Component
  </div>
)

const EditExpensePage = () => (
  <div>
    EditExpensePage
  </div>
)

const HelpPage = () => (
  <div>
    HelpPage
  </div>
)

const NotFoundPage = () => (
  <div>
    404 This page does not exist
  </div>
)

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/contacts" component={Contacts} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={ NotFoundPage }/>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));
