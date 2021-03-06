import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './model/store';
import App from './App';
import * as serviceWorker from './serviceWorker';

const render = () => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	);
};

render();

serviceWorker.unregister();
