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
      <img src={"https://pixabay.com/get/eb3cb6092ff5003ed1584d05fb1d4f91e57fe7dc11ac104496f4c779a5e9b5ba_1280.jpg"} className="BackgroundCityImage"/>
      </div>

      );

  }
}

}

export default BackgroundCity;
