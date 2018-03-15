import React, { Component } from 'react';
import Day from '../../Day'; 

import './FormDay.css';

class FormDay extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isToggleOn: false, 
        forecast: [], 
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

    // API for 5 days 
    search(cityname) { 

        fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${cityname}&APPID=d87dbcdd5af33f7b33168db052c38feb&units=metric`)
            .then(this.handleErrors)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    forecast: res.list
                });
                console.log(this.state.forecast);

            })
            .catch(function(error) {
                console.log(error);
            });
    }


   render() {
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