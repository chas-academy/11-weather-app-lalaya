import React, { Component } from 'react';
import Geographic from '../../Geographic';

import './FormGeographic.css';

class FormGeographic extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isToggleOn: false, 
        geographic: null,

      }
    
       this.onOffClick = this.onOffClick.bind(this); 
    }

    /* componentDidMount() {
        this.search(this.props.searchForCity);
    } */ 

    
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
    
    /* API for Geographic */ 
    componentDidMount() {
        console.log(this.props);
        if((this.state.longitude && this.state.latitude) !== 0) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=d87dbcdd5af33f7b33168db052c38feb`)
            .then(this.handleErrors)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    geographic: res
                });
            })
            .catch(function(error) {
                console.log(error);
            });
            
        }
        console.log(this.state.geographic);
    }
    
    render() {
        return (
            <div>
            <div className="App-forecast">
            {this.state.geographic && <Geographic interval={this.state.geographic} />}
            </div>
            </div>
        );     
    }
}

export default FormGeographic;