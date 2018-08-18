import React, { Component } from 'react';
import sunshine from './pictures/sunshine.png'
import './css/WeatherForecast.css'

var weekday = new Array(7);
weekday[0] =  "Sonntag";
weekday[1] = "Montag";
weekday[2] = "Dienstag";
weekday[3] = "Mittwoch";
weekday[4] = "Donnerstag";
weekday[5] = "Freitag";
weekday[6] = "Samstag";

class WeatherForecast extends Component {
    constructor(props){
    super(props);}

  render() {
    return (
     <div class="WeatherForecast">
     <div class="margin">
     <img src={"http://openweathermap.org/img/w/" + this.props.WeatherData.weather[0].icon +".png"
} class="Weather-Picture"/>
     <p > {Math.ceil(this.props.WeatherData.main.temp - 273.15)}°C</p>
     <p> {weekday[((new Date().getDay() + this.props.Day) % 7)]} </p>
     </div>
     </div>
     );
  }
}

export default WeatherForecast;
