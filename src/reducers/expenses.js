const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((x) => {
        if (x.id === action.id) {
          return {
            ...x,
            ...action.updates,
          };
        }
        return x;
      });
    default:
      return state;
  }
};

export default expensesReducer;
