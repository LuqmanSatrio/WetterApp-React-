import React, { Component } from 'react';
import './css/BackgroundCity.css'


class BackgroundCity extends Component {
 constructor(props){
  super(props);
  this.state = {
    error: null,
    isLoaded: this.props.ImgIsLoaded,
  };
}




render() {
  const { error, isLoaded, ImgURL} = this.state;
  if (this.props.ImgIsLoaded) {
    return(

     <div>
     <img src={this.props.ImgURL} className="BackgroundCityImage"/>
     </div>
     )
  } else {


    return (
      <div>
      <img src={this.props.ImgURL} className="BackgroundCityImage"/>
      </div>

      );

  }
}

}

export default BackgroundCity;
