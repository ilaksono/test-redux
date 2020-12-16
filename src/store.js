import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { buttonReducer } from './reducers/buttonReducer';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    button: buttonReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;