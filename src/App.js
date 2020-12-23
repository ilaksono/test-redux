import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  Provider,
  connect,
  ReactReduxContext,
  useSelector
} from 'react-redux';
import { incrementVal } from './actions/buttonActions';
import store from './store';
import Table from './Table';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';


const Button = () => {
  return (<button onClick={() => store.dispatch(Actions.increment())}> I AM BUTTON</button>);
};

function App() {
  const [val, setVal] = useState(0);
  const c = useSelector(state => state);
  return (

    <div className="App">
      <Button />
      {/* <ReactReduxContext.Consumer>
        </ReactReduxContext.Consumer> */}
      {/* <div>
          {({ store }) => store}
        </div> */}
      {c.button}
      <div>
        <Table state={c} actions={Actions}/>
      </div>
    </div>
  );
}

export default App;