import React, { Component } from 'react';
import sunshine from './pictures/sunshine.png'
import './css/WeatherForecast.css'

class WeatherForecast extends Component {
  render() {
    return (
     <div class="WeatherForecast">
     <div class="margin">
     <img src={sunshine} class="Weather-Picture"/>
     <p > 33°C </p>
     <p> monday </p>
     </div>
     </div>
     );
  }
}

export default WeatherForecast;
