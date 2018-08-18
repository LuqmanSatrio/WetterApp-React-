import React, { Component } from 'react';
import './css/search.css';
import WeatherBundle from './weatherbundle'
import Sunshine from './pictures/sunshine.png'
import initialJson from './initialJson.json'

var API_KEY = "832b52041e8dc7d9855007b87e8ef873"


class Search extends Component {
   constructor(props) {
    super(props);
    this.state = {
      term: 'Hamburg',
      ImgURL : "https://pixabay.com/get/ea34b30e28f4083ed1584d05fb1d4f91e57fe7dc11ac104496f4c779a5e9b5ba_1280.jpg",
      WeatherJson: initialJson,
      TodayTemp: "290",
      TodaySymbolLink: Sunshine,
      ImgIsLoaded: false};
    this.onButtonClicked = this.onButtonClicked.bind(this)
  }

  render() {

    return (
      <div >
           <br/>
  <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <form className="card card-sm">
                                <div className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <i className="fas fa-search h4 text-body"></i>
                                    </div>

                                    <div className="col">
                                        <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" onChange={event => this.setState({term: event.target.value})} value={this.state.term}/>
                                    </div>

                                    <div className="col-auto">
                                        <button className="btn btn-lg btn-success" type="button" onClick={this.onButtonClicked}>Search</button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                    <WeatherBundle ImgURL={this.state.ImgURL} ImgIsLoaded={this.state.ImgIsLoaded} WeatherJson ={this.state.WeatherJson} TodayTemp={this.state.TodayTemp} TodaySymbol={this.state.TodaySymbolLink}/>

      </div>
    );
  }


  onButtonClicked(event){
    fetch("https://pixabay.com/api/?key=9768598-b7b5649d7396f5ca7fdc58676&q=" + this.state.term +"&image_type=photo&pretty=true")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            ImgURL: result.hits[0].largeImageURL,
            ImgIsLoaded: true,
          })
          })

      fetch("http://api.openweathermap.org/data/2.5/forecast?q="+ this.state.term +"&appid=" + API_KEY)
      .then(res => res.json())
      .then(
        (result) => {

          this.setState({
            WeatherJson: result,
            TodayTemp :result.list[0].main.temp,
            TodaySymbolLink: "http://openweathermap.org/img/w/" + result.list[0].weather[0].icon +".png"
          })

        })
 console.log(this.state.TodayTemp);
}

  }



export default Search;
