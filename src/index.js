import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './Reducers/TodoReducer.js';
import { Provider } from 'react-redux/es/exports';


const root = ReactDOM.createRoot( document.getElementById('root') );
root.render(
    <Provider store={store}>
        <App />
    </Provider>
) 