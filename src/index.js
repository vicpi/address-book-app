import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'index.scss'
import globalReducer from 'reducers/index'
import createSagaMiddleware from 'redux-saga'
import App from 'components/App/App'
import rootSaga from 'sagas'

const preloadedState = window.__PRELOADED_STATE__ || {}
delete window.__PRELOADED_STATE__

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    globalReducer,
    preloadedState,
    compose(
        applyMiddleware(sagaMiddleware),
        typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);