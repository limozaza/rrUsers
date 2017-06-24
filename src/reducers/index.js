import { combineReducers } from 'redux';
import UserReducer from './ReducerUsers';

const rootReducer = combineReducers({
  users : UserReducer
});

export default rootReducer;
