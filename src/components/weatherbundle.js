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

    return (
     <div className="WeatherBundle">
     <BackgroundCity ImgURL={this.props.ImgURL} ImgIsLoaded={this.props.ImgIsLoaded}/>
     <WeatherToday />
     <WeatherForecastContainer />
     </div>

     );
  }



}


export default WeatherBundle;
