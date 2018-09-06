import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import 'typeface-roboto';
import 'normalize.css';
import '@mdi/font/css/materialdesignicons.css';
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/fab/dist/mdc.fab.css';
import '@material/dialog/dist/mdc.dialog.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
