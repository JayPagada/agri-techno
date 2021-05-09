import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createStore ,applyMiddleware ,compose,combineReducers} from "redux";
import authReducer from "./Redux/reducer/auth"
import feedBackReducer from "./Redux/reducer/FeedBack"
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    auth:authReducer,
    feedBack:feedBackReducer
})
const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
));
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <Router history={history}>
    <App />
    </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
