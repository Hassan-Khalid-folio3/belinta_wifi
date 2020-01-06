import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';

class EntryPoint extends React.Component {
    state = {
      locale: 'en'
    };
    store = configureStore();
    render() {
      const { locale } = this.state;

      return (
        <Provider store={this.store}>
            <App />
        </Provider>
      );
    }
  }

ReactDOM.render(<EntryPoint />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();