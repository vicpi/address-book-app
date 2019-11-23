import { hot } from 'react-hot-loader/root'
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import SettingsPage from 'pages/SettingsPage/SettingsPage';
import './App.scss'

const App = () => (
    <>
        <div className="App">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/settings" component={SettingsPage} />
            </Switch>
        </div>
    </>
);

export default hot(App);
