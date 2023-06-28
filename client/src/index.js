import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import './index.css';
import App from './App';
import { globalSlice } from './state/index';

const rootReducer = combineReducers({
  global: globalSlice.reducer,
  // Add other reducers here if needed
});

const store = createStore(rootReducer); // Create the Redux store with the root reducer

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);

