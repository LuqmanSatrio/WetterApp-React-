
//test

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from './components/search';
import registerServiceWorker from './registerServiceWorker';

const API_KEY = "832b52041e8dc7d9855007b87e8ef873"

const element = <div> <Search/> </div>;

ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
