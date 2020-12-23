import { useSelector } from 'react-redux';
import store from './store';
import Table from './Table';
import * as Actions from './actions/buttonActions';


const Button = () =>
  <button
    onClick={() =>
      store.dispatch(Actions.increment())
    }
  >
    Increment
  </button>;


function App() {
  const state = useSelector(state => state);
  return (

    <div className="App">
      <Button />
      {state.button.value}
      <div>
        <Table actions={Actions}/>
      </div>
    </div>
  );
}

export default App;