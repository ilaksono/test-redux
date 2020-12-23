import { useReducer } from 'react';
import buttonReducer from '../reducers/buttonReducer';

const initState = {
  value: 0
};

const useButtonData = () => {
  const [button, buttonDispatch]
    = useReducer(buttonReducer, initState);
  
    return {
      button,
      buttonDispatch
    }
};

export default useButtonData;