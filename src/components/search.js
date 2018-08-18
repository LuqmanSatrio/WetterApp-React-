import React, { Component } from 'react';
import './css/search.css';
import WeatherBundle from './weatherbundle'

class Search extends Component {
   constructor(props) {
    super(props);
    this.state = {
      term: 'input',
      ImgURL : "https://pixabay.com/get/e133b80d28fc1c22d2524518b7454190eb72ebdd04b0144291f5c879a6ebb3_1280.jpg",
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
                    <WeatherBundle ImgURL={this.state.ImgURL} ImgIsLoaded={this.state.ImgIsLoaded}/>

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
            ImgIsLoaded: true
          })
          console.log(this.state.ImgURL)
          })}
  }



export default Search;
