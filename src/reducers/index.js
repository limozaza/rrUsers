import { combineReducers } from 'redux';
import UserReducer from './ReducerUsers';
import ActiveUserReducer from './ReducerActiveUser';

const rootReducer = combineReducers({
  users : UserReducer,
  activeUser : ActiveUserReducer
});

export default rootReducer;
