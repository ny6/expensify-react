import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    { props.expenses.map(x => <ExpenseListItem key={x.id} {...x} />) }
  </div>
);

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
