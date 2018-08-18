import React, { Component } from 'react';
import WeatherForecast from './WeatherForecast'
import './css/WeatheForecastContainer.css'

class WeatherForecastContainer extends Component {
    constructor(props){
    super(props);
}
  render() {
    return (
     <div class="allign">
     <WeatherForecast Day={1} WeatherData={this.props.WeatherJson.list[7]}/>
     <WeatherForecast Day={2} WeatherData={this.props.WeatherJson.list[15]}/>
     <WeatherForecast Day={3} WeatherData={this.props.WeatherJson.list[23]}/>
     <WeatherForecast Day={4} WeatherData={this.props.WeatherJson.list[31]}/>
     <WeatherForecast Day={5} WeatherData={this.props.WeatherJson.list[39]}/>
     </div>


     );
  }
}

export default WeatherForecastContainer;
