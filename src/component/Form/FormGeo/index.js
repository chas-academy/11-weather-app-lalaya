/* import React, { Component } from 'react';
import Geo from '../../Geo';


import './FormGeo.css';

class FormGeo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isToggleOn: false, 
        weather: null
      }
    
       this.onOffClick = this.onOffClick.bind(this); 
    }

    componentDidMount() {
        this.search(this.props.searchForCity);
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


    // API Geo
    search (cityname) {
        // q=${cityname}&APPID=d87dbcdd5af33f7b33168db052c38feb&units=metric

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=d87dbcdd5af33f7b33168db052c38feb&units=metric`)
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

    render() {
        return (
            <div>
                <div className="App-forecast">
                {this.state.weather && <Geo interval={this.state.weather} />}
                </div>
            </div>
        );     
    }
}

export default FormHourly; */ 