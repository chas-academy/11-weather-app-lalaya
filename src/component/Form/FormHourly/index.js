import React, { Component } from 'react';
import Hourly from '../../Hourly';


import './FormHourly.css';

class FormHourly extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isToggleOn: false, 
        weather: null
      }
    
       this.onOffClick = this.onOffClick.bind(this); 
    }

    componentDidMount() {
        this.search(this.props.searchForCity, this.props.unit);
    }

    componentWillReceiveProps(nextProps) {
        this.search(nextProps.searchForCity, nextProps.unit);
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


    // API for 24 hours
    search (cityname, unit) {
        if(cityname) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=d87dbcdd5af33f7b33168db052c38feb&units=${unit}`)
                .then(this.handleErrors)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        weather: res
                    });
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }

    render() {
        return (
            <div>
                <div className="App-forecast">
                {this.state.weather && <Hourly interval={this.state.weather} unitInfo={this.props.unitInfo} />}
                </div>
            </div>
        );     
    }
}

export default FormHourly;