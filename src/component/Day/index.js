import React, { Component } from 'react';
import './Day.css';

class Day extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        console.log(this.props.interval);
        return (
            <div>
                <div className="small-2 medium-3 column weather-icon">
                    <h4>{this.props.interval.dt_txt}</h4>
                </div>

                <div>
                    <img src={`http://openweathermap.org/img/w/${this.props.interval.weather[0].icon}.png`} title="Title goes here" alt="A weather icon, describing the... weather" />
                </div>

                <div>
                    {this.props.interval.main.temp} &deg; Celcius 
                    <br />
                    Highest {this.props.interval.main.temp_max} &deg; C
                    <br />
                    Lowest {this.props.interval.main.temp_min}  &deg; C
                    <br />
                    {this.props.interval.weather[0].description}
                    <br />
                    Wind speed {this.props.interval.wind.speed} m/s
                    <br />
                    Humidity {this.props.interval.main.humidity} %
                </div>
            </div>
        );
    }
}

export default Day; 