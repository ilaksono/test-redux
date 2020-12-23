import { createStore } from 'redux';
import rootReducer from './reducers';
// import counterSlice from './actions/buttonActionsAlternative';
const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ 
  && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// const store = createStore(counterSlice,
//   window.__REDUX_DEVTOOLS_EXTENSION__
//   && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default store;
