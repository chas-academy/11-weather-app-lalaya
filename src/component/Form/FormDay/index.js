import React, { Component } from 'react';
import Day from '../../Day'; 

import './FormDay.css';

class FormDay extends Component {
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

export default FormDay;