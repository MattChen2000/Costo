import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import notFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ ExpenseDashboardPage } exact/>
                <Route path="/add" component={ AddExpensePage }/>
                <Route path="/edit/:id" component={ EditExpensePage }/>
                <Route path="/help" component={ HelpPage }/>
                <Route component={ notFoundPage }/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;