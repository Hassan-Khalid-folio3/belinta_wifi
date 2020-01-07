import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from "react-intl";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';

// translations
import messages_en from "./translations/en.json";

const messages = {
  'en': messages_en
};

const language = navigator.language.split(/[-_]/)[0];

class EntryPoint extends React.Component {
  store = configureStore();
  
  render() {
    return (
      <IntlProvider locale={ language } messages={ messages[language] }>
        <Provider store={ this.store }>
          <App />
        </Provider>
      </IntlProvider>
    );
  }
}

ReactDOM.render(<EntryPoint />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();