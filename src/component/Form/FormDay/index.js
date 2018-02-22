import React, { Component } from 'react';
import Day from '../../Day'; 

import './FormDay.css';

class FormDay extends Component {
    constructor(props) {
      super(props);
      this.state = {
        forecast: [], 
      }
      
    }

    handleError(response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response; 
    }

    // API for 5 days 
    search(cityname) { 

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

        this.search(this.props.searchForCity);

        return (
            <div>
                {
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