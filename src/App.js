import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Provider, connect, ReactReduxContext } from 'react-redux';
import { incrementVal } from './actions/buttonActions';

const Button = () => {
  return (<button onClick={incrementVal}> I AM BUTTON</button>);
};
function App() {
  const [val, setVal] = useState(0);
  return (

    <div className="App">
      <Button />
      <ReactReduxContext.Consumer>
        <div>
          {({ store }) => store}
        </div>
      </ReactReduxContext.Consumer>

    </div>
  );
}

export default connect(state => state.button, null)(App);
