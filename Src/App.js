import React, { Component } from 'react';
import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';

const APIKEY = "d592c90b5dc39665aef4a023625a8077"

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&id=524901&APPID=${APIKEY}`);
    const data = await api_call.json();
    // console.log(data);
    // console.log(data.main.temp);
    // console.log(data.name);
    // console.log(data.sys.country);
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description
      });
    } else {
      this.setState({
        error: "Please Enter a value"
      })
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper" >
          <div className="main" >
            <div className="container" >
              <div className="row" >
                <div className="col-xs-5 title-container" >
                  <Titles />
                </div>
                <div className="col-xs-7 form-container" >
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;