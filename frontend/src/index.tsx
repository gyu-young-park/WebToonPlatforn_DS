import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import promiseMiddleware from 'redux-promise'
import reduxThunk from 'redux-thunk'
import Reducer from './_reducers'
//redux와 미들웨어 연결 typescript 버전
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,reduxThunk)(createStore)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
ReactDOM.render(
  <React.StrictMode>
    <Provider 
      store={createStoreWithMiddleware(Reducer)}
    >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

