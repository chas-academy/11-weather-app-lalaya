import React, { Component } from 'react';
import FormHourly from '../Form/FormHourly';
import FormDay from '../Form/FormDay';
import FormGeographic from '../Form/FormGeographic';

import './Search.css';

class Search
    extends Component {
        constructor(props) {
        super(props);
        this.state = { 
            resultsMode : '',
            searchForCity: '',
            position: []
        }
        
        this.hourlyButtonClicked = this.hourlyButtonClicked.bind(this); 
        this.dayButtonClicked = this.dayButtonClicked.bind(this); 
        this.geographicButtonClicked = this.geographicButtonClicked.bind(this); 

        }

        hourlyButtonClicked() {
            this.setState({resultsMode : 'Hourly'});
        }

        dayButtonClicked() {
            this.setState({resultsMode : 'Day'});
        }

        geographicButtonClicked() {
            navigator.geolocation.getCurrentPosition((pos) => {

                this.setState({
                    position: {
                        "longitude" : pos.coords.longitude.toFixed(5), 
                        "latitude"  : pos.coords.latitude.toFixed(5)
                    }
                });

                this.setState({resultsMode : 'Geographic'});
            },
            (error) => {
                console.log(error);
            },
            {
                timeout: 10000,
                enableHighAccuracy : false
            }
            );

        }

        chooseTemperatureClicked() {
            this.setState({resultMode : ''});
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
                case "Geographic":
                    return <FormGeographic geographic={this.state.position}/>
                default:
                    return null;
        }
    }

    componentDidMount() {

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
                <button id="geographic" onClick={this.geographicButtonClicked}>Where r u at?</button>
                <div>
                <button id="chooseTemperature" onClick={this.chooseTemperatureClicked}>&deg; C/ F</button>
                </div>
                <div>
                    {Forecast}
                </div>
            </div>
        );       
    }
}

export default Search;
