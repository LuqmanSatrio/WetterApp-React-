import React, { Component } from 'react';
import './WeatherToday.css'
import Sunshine from './sunshine.png'


class WeatherToday extends Component {
  render() {
    return (
        <div >
        <div class="Weather-Data">
        <div class="margin" >
        <img class="Weather-Symbol" src={Sunshine} />
        <p class="Today"> Today </p>
        <p class="TempToday"> 33°C </p>
        </div>
        </div>
        </div>
        );
}
}

export default WeatherToday;
