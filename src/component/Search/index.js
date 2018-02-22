import React, { Component } from 'react';
import FormHourly from '../Form/FormHourly';
import FormDay from '../Form/FormDay';
import FormWeeks from '../Form/FormWeeks';

import './Search.css';

class Search
 extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        resultsMode : 'Hourly',
        searchForCity: ''
      }
    
      this.hourlyButtonClicked = this.hourlyButtonClicked.bind(this); 
      this.dayButtonClicked = this.dayButtonClicked.bind(this); 
      this.weeksButtonClicked = this.weeksButtonClicked.bind(this); 

    }

    hourlyButtonClicked() {
        this.setState({resultsMode : 'Hourly'});
    }

    dayButtonClicked() {
        this.setState({resultsMode : 'Day'});
    }

    weeksButtonClicked() {
        this.setState({resultsMode : 'Weeks'});
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
        this.setState({searchForCity: cityname});
        /*{fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${cityname}&APPID=638dd182cc3405c7e786b4d6e5cd0c80&units=metric`)
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
    } */
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
                <button id="hourly" onClick={this.hourlyButtonClicked}>24 hours</button>
                <button id="days" onClick={this.dayButtonClicked}>5 days</button>
                <button id="weeks" onClick={this.weeksButtonClicked}>16 days</button>
                <div>
                { 
                !this.state.searchForCity ? 
                    <div><p>Enter city in box and click 'Get weather'!</p></div> :
                this.state.resultsMode == 'Hourly' ?
                    <FormHourly searchForCity={this.state.searchForCity} /> :
                this.state.resultsMode == 'Day' ?
                    <FormDay searchForCity={this.state.searchForCity} /> :
                this.state.resultsMode == 'Weeks' ?
                    <FormWeeks searchForCity={this.state.searchForCity} /> : 
                    ''
                }
                </div>
            </div>
        );       
    }
}

export default Search;
