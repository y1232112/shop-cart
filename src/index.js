import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import {getAllProducts} from './actions';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}
export const store = createStore(
    reducer,
    applyMiddleware(...middleware)
  )
  store.dispatch(getAllProducts())

 
ReactDOM.render(
      <Provider store={store}>
      <App />
      </Provider>, document.getElementById('root'));


serviceWorker.unregister();
