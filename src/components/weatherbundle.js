import React, { Component } from 'react';
import BackgroundCity from './BackgroundCity'
import WeatherToday from './WeatherToday'
import WeatherForecastContainer from './WeatherForecastContainer'
import './WeatherBundle.css';



class WeatherBundle extends Component {
  render() {
    return (
     <div className="WeatherBundle">
     <BackgroundCity />
     <WeatherToday />
     <WeatherForecastContainer />
     </div>

     );
  }
}

export default WeatherBundle;
