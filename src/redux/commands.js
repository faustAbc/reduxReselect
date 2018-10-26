import { getList } from './actions';

export const getListItems = () => dispatch => {
  setTimeout(() => {}, 1000);
  const derivedList = [
    'anatolich',
    'evgenich',
    'pahomich',
    'kekich',
    'lolich'
  ];
  
  dispatch(getList(derivedList));
}