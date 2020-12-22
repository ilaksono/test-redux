import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Provider, connect, ReactReduxContext, useSelector } from 'react-redux';
import { incrementVal } from './actions/buttonActions';
import store, {increment} from './store';
const Button = () => {
  return (<button onClick={() => store.dispatch(increment())}> I AM BUTTON</button>);
};
function App() {
  const [val, setVal] = useState(0);
  const c = useSelector(state => state.button);
  return (

    <div className="App">
      <Button />
      {/* <ReactReduxContext.Consumer>
        </ReactReduxContext.Consumer> */}
        {/* <div>
          {({ store }) => store}
        </div> */}
        {c}
    </div>
  );
}

export default App;