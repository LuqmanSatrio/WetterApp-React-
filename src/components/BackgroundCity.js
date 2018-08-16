import React, { Component } from 'react';
import example_city from './example_city.jpg';
import './BackgroundCity.css'
var requestURL = "https://pixabay.com/api/?key=9768598-b7b5649d7396f5ca7fdc58676&q=Hamburg&image_type=photo&pretty=true"
var City_Image = "test";




class BackgroundCity extends Component {
 constructor(props){
  super(props);
  this.state = {
    error: null,
    isLoaded: false,
    ImgURL: "test"
  };
}

componentDidMount() {

  var request = new XMLHttpRequest();
  request.open('GET', requestURL, true);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
  var JsonResponse = request.response;
  City_Image= JsonResponse.hits[1].largeImageURL;
  }
  this.setState({
    isLoaded: true,
    ImgURL : City_Image
  });
console.log(City_Image);
}

render() {
  const { error, isLoaded, ImgURL} = this.state;
  if (error) {
    console.log('error');
    return <div>Error: {error.message}</div>;

  } else if (!isLoaded) {
    console.log("hi");

    return <div><p>Loading...</p></div>;
  } else {
    console.log(this.state.ImgURL + "");
    return (
      <div>
      <img src={this.state.ImgURL} className="BackgroundCityImage"/>
      </div>
      );
  }
}
}

export default BackgroundCity;
