import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from './components/search';
import WeatherBundle from './components/weatherbundle'
import registerServiceWorker from './registerServiceWorker';

const API_KEY = "9768598-b7b5649d7396f5ca7fdc58676"

const element = <div> <Search/> <WeatherBundle/> </div>;

ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
