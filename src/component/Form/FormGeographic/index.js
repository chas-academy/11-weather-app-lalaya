import React, { Component } from 'react';
import Geographic from '../../Geographic';

import './FormGeographic.css';

class FormGeographic extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isToggleOn: false, 
        daily: null
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

    // API for Geographic
    search (cityname) {

        fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityname}&APPID=d87dbcdd5af33f7b33168db052c38feb&units=metric&cnt=14`)

            .then(this.handleErrors)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    daily: res.list
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
                {this.state.daily && <Geographic interval={this.state.daily} />}
                </div>
            </div>
        );     
    }
}

export default FormGeographic;