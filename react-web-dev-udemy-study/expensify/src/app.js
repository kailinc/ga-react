import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
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

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/contacts" component={Contacts} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));
