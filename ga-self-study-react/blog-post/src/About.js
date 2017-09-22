import React, { Component } from 'react';
// import GoogleMaps from './GoogleMaps';

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: null,
      weather: null,
      center: null
    }
  }

  getZipCode(e) {
    e.preventDefault()
    // console.log('the value of input from handleChange() is ', e.target.value)
    let zipCode = e.target.value.toString()
    let link = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us&appid=052f26926ae9784c2d677ca7bc5dec98'
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          city: data.name,
          weather: data.main,
          center: data.coord
        })
      })
      .then( () => {
        let modTemp = KelvinToCel(this.state.weather.temp)
        let maxTemp = KelvinToCel(this.state.weather.temp_max)
        let minTemp = KelvinToCel(this.state.weather.temp_min)
        this.setState({
          weather: {
            temp: modTemp,
            temp_max: maxTemp,
            temp_min: minTemp
          }
        })
      })
      .catch((error) => console.log('this is error ', error ))

  }

  render() {
    if (this.state.city) {
      return(
        <div>
          <h1>About Me</h1>
          <p>{this.state.city}</p>
          <p>The weather in {this.state.city} is {this.state.weather.temp} C. The high is {this.state.weather.temp_max}. The low is {this.state.weather.temp_min} C. </p>
          <form>
            Zip Code: <input type="number" onChange={(e) => this.getZipCode(e)}></input>
          </form>
        </div>)
    }
    return(
      <div>
        <h1>About Me</h1>
        <p>Enter a Zip Code to get Weather Data</p>
        <form>
          Zip Code: <input type="number" onChange={(e) => this.getZipCode(e)}></input>
        </form>
      </div>
    )
  }
}

const KelvinToCel = function (temp) {
  return parseInt(temp - 273.15)
}

export default About;
