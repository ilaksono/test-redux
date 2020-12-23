import { combineReducers } from 'redux';
import buttonReducer from './buttonReducer.js';

export default combineReducers({
  button: buttonReducer
});
