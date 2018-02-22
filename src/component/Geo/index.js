import React, { Component } from 'react';
import './Geo.css';

class Geo extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div>
                <div>
                <div className="row">
                    <h4>{this.props.interval.dt_txt}</h4>
                    </div>

                    <div>
                        <h4>{this.props.interval.weather[0].id}</h4>
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

export default Geo; 