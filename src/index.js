import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Routes from './router';
import configureStore from './store/configureStore';
import './index.css';

export const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
       <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}
render(Routes);

if (module.hot) {
  module.hot.accept('./router', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./router').default;
    render(NextApp);
  });
}
