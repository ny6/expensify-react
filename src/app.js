import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import './styles/style.scss';
import { addExpense } from './actions/expenses';

const store = configureStore();

store.dispatch(addExpense({
  description: 'Macbook',
  amount: 50000,
  createdAt: 1700,
}));
store.dispatch(addExpense({
  description: 'iPhone',
  amount: 40000,
  createdAt: 900,
}));
store.dispatch(addExpense({
  description: 'Books',
  amount: 5000,
  createdAt: 89900,
}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
