import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard compoenent
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my addExpense compoenent
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my editExpense compoenent
    </div>
);

const HelpPage = () => (
    <div>
        This is from my Help Page compoenent
    </div>
);

const notFoundPage = () => (
    <div>
        404! 
        {/* <Link to="/">Go to Homepage</Link> */}
    </div>
);

const Header = () => (
    <header>
        <h1>Costo</h1>
        <NavLink to="/" activeClassName="is-active" exact>Go to Homepage</NavLink><br/>
        <NavLink to="/add" activeClassName="is-active">Go to Add Page</NavLink><br/>
        <NavLink to="/edit" activeClassName="is-active">Go to Edit Page</NavLink><br/>
        <NavLink to="/help" activeClassName="is-active">Go to Help Page</NavLink><br/>
    </header>
)

const routes = (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ ExpenseDashboardPage } exact/>
            <Route path="/add" component={ AddExpensePage }/>
            <Route path="/edit" component={ EditExpensePage }/>
            <Route path="/help" component={ HelpPage }/>
            <Route component={ notFoundPage }/>
        </Switch>
    </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

