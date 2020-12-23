import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { buttonReducer } from './reducers/buttonReducer';
import {increment, decrement} from './actions';
const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
const rootReducer = combineReducers({
  button:buttonReducer
})
// const composeEnhancer =() => window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

store.subscribe(() => console.log(store.getState()));


store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
export default store;