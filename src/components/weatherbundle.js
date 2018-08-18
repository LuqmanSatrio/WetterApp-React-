import React, { Component } from 'react';
import BackgroundCity from './BackgroundCity'
import WeatherToday from './WeatherToday'
import WeatherForecastContainer from './WeatherForecastContainer'
import './css/WeatherBundle.css';



class WeatherBundle extends Component {
constructor(props){
  super(props);
}

  render() {
    console.log(this.props.TodaySymbol);

    return (
     <div className="WeatherBundle">
     <BackgroundCity ImgURL={this.props.ImgURL} ImgIsLoaded={this.props.ImgIsLoaded}/>
     <WeatherToday TodayTemp={this.props.TodayTemp} TodaySymbol={this.props.TodaySymbol}/>
     <WeatherForecastContainer WeatherJson={this.props.WeatherJson}/>
     </div>

     );
  }



}


export default WeatherBundle;
