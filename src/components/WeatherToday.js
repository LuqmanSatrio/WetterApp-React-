import React, { Component } from 'react';
import './css/WeatherToday.css'
import Sunshine from './pictures/sunshine.png'


class WeatherToday extends Component {
    constructor(props){
    super(props);
    this.state ={
        temperature : this.props.TodayTemp,
        weatherSymbol : Sunshine
    }

}
  render() {
    console.log(this.props.TodaySymbol);

    return (
        <div >
        <div class="Weather-Data">
        <div class="margin" >
        <img class="Weather-Symbol" src={this.props.TodaySymbol}/>
        <p class="Today"> Today </p>
        <p class="TempToday"> {Math.ceil(this.props.TodayTemp - 273.15)}°C </p>
        </div>
        </div>
        </div>
        );
}



}

export default WeatherToday;
