import React, { Component } from 'react';
import sunshine from './sunshine.png'
import './WeatherForecast.css'

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
