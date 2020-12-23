import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from 'AppContext';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);



  // import store from './store';
  // import { Provider } from 'react-redux';
