import AppContext from 'AppContext';
import { useContext } from 'react';
import { increment } from 'actions/buttonActions';
const Button = () => {
  const { buttonDispatch } = useContext(AppContext);
  return <button onClick={() => buttonDispatch(increment())}>
    Increment
    </button>;
};
export default Button;