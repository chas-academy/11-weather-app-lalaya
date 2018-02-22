import React, { Component } from 'react';
import Geo from '../../Geo';

import './FormGeo.css';

class FormGeo
 extends Component {
    constructor() {
      super();
      this.state = {
        isToggleOn: false, 
        forecast: [], 
      }
    
       this.onOffClick = this.onOffClick.bind(this); 
    }

    onOffClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        })); 
    }


    handleError(response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response; 
    }

    // API for 5 days 
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
                    // forecast is here now
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
                    <button className="button" type="submit">Get Weather</button>
                    </fieldset>
                </form>
                <button id="hours" onClick={this.onOffClick}>24 hours</button>
                <button id="day" onClick={this.onOffClick}>5 days</button>
                <button id="weeks" onClick={this.onOffClick}>16 days</button>
                
                { !this.state.isToggleOn ?
                    "" :
                    this.state.weather && this.state.weather.length > 0 ?
                    <div className="App-weather">
                        <img src={`http://openweathermap.org/img/w/${this.state.weather[0].icon}.png`} title="Title goes here" alt="A weather icon that describes the weather" />
                        <p>
                            {this.state.weather[0].description}
                        </p>
                    </div>
                    : <p>No results, try again.</p>
                }
                { !this.state.isToggleOn ? 
                    "" :
                this.state.forecast && this.state.forecast.length > 0 ?
                    <div className="App-forecast">
                    {
                        this.state.forecast.map((interval, index) => { 
                            return <Geo key={index} interval={interval} />
                        })
                    }
                    </div>
                    : ''
                }
            </div>
        );       
    }
}

export default FormGeo;