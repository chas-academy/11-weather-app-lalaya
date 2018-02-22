import React, { Component } from 'react';
import Day from '../Day';

import './Form.css';

class Form extends Component {
    constructor() {
      super();
      this.state = {
        forecast: []
      }
    }

    handleError(response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response; 
    }

    // Sending for API request 
    onFormSubmit(e) {
        e.preventDefault();
        const cityname = e.nativeEvent.target.elements[1].value;


        fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${cityname}&APPID=638dd182cc3405c7e786b4d6e5cd0c80&units=metric`)
            .then(this.handleErrors)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    forecast: res.list
                }, function() {
                    // forecase is here now
                });
            })
            .catch(function(error) {
                console.log(error);
            });
        }

render() {
    return (
        <div>
        <form className="App-search" onSubmit={this.onFormSubmit.bind(this)}>
            <fieldset>
            <input type="text" placeholder="City name here" id="cityField" />
            <button className="button button-primary" type="submit">Get Weather</button>
            </fieldset>
        </form>
        { this.state.weather && this.state.weather.length > 0 ?
            <div className="App-weather">
            <img src={`http://openweathermap.org/img/w/${this.state.weather[0].icon}.png`} title="Title goes here" alt="A weather icon, describing the weather" />
            <p>
                {this.state.weather[0].description}
            </p>
            </div>
            : <p>No results, try again.</p>
        }
        { this.state.forecast && this.state.forecast.length > 0 ?
            <div className="App-forecast">
            {
                this.state.forecast.map((interval, index) => { 
                return <Day key={index} interval={interval} />
                })
            }
            </div>
            : ''
        }
        </div>
    );
    }
}

export default Form;