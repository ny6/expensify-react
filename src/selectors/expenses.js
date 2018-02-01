import moment from 'moment';

const getVisibleExpenses = (expenses, {
  text, sortBy, startDate, endDate,
}) => (expenses.filter((x) => {
  const createdAtMoment = moment(x.createdAt);
  const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
  const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
  const textMatch = x.description.toLowerCase().includes(text.toLowerCase());

  return startDateMatch && endDateMatch && textMatch;
}).sort((a, b) => {
  if (sortBy === 'amount') {
    return a.amount < b.amount ? 1 : -1;
  }
  return a.createdAt < b.createdAt ? 1 : -1;
}));

export default getVisibleExpenses;
