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
        resultsMode : '',
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

    onFormSubmit(e) {
        e.preventDefault();
        const cityname = e.nativeEvent.target.elements[1].value;
        this.setState({searchForCity: cityname});
   }

   renderForecastComponent = () => {
        switch (this.state.resultsMode) {
            case "Hourly":
                return <FormHourly searchForCity={this.state.searchForCity}/>
            case "Day":
                return <FormDay searchForCity={this.state.searchForCity}/>
            case "Weeks":
                return <FormWeeks searchForCity={this.state.searchForCity}/>
            default:
                return null;
       }
   }

   render() {
        const Forecast = this.renderForecastComponent();
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
                    {Forecast}
                </div>
            </div>
        );       
    }
}

export default Search;
