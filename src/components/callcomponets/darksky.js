import React from 'react';
import superagent from 'superagent';

class Darksky extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      weatherData: [],
      locationCoord: 0
    };
  }

  updateLocationCoord(){
    if(this.props.location.id !== this.state.locationCoord){
      this.apiCall();
    }
  }

  apiCall = async () => {
    if(Object.entries(this.props.location).length !== 0 && this.props.location.constructor === Object){
      let data = await superagent.get(`${this.props.herokuServer}+/weather`).query({data: this.props.location});
      this.setState((state, props) =>{
        return {weatherData: data.body, locationCoord: this.props.location.id};
      })
    }
  }

  render() {
    let weatherContent = this.state.weatherData.map((weather, idx) => (
      <li key={idx}>The forecast for { weather.time } is: { weather.forecast }</li>
    ));
    return(
      <section>
        <h3>Results from the Dark Sky API</h3>
        <ul className="weather-results">
          {weatherContent}
        </ul>
      </section>
    );
  }
}

export default Darksky;