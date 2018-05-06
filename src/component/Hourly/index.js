import React, { Component } from 'react';
import './Hourly.css';

class Hour extends Component {
    render() {
        return (
            <div>
                <div className="small-2 medium-3 column weather-icon">

                        <div>
                            <img src={`http://openweathermap.org/img/w/${this.props.interval.weather[0].icon}.png`} title="Weather Icon" alt="A weather icon" />
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
                </div>
        );
    }
}

export default Hour; 