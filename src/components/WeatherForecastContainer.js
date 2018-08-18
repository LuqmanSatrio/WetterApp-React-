import React, { Component } from 'react';
import WeatherForecast from './WeatherForecast'
import './css/WeatheForecastContainer.css'

class WeatherForecastContainer extends Component {
  render() {
    return (
     <div class="allign">
     <WeatherForecast />
     <WeatherForecast />
     <WeatherForecast />
     <WeatherForecast />
     <WeatherForecast />
     </div>


     );
  }
}

export default WeatherForecastContainer;
