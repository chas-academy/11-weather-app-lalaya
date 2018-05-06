import React, { Component } from 'react';
import Geographic from '../../Geographic';

import './FormGeographic.css';

class FormGeographic extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isToggleOn: false, 
        geographic: null,
        coordinates: props.geographic
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
    
    /* API for Geographic */ 
    componentDidMount() {
        this.search(this.props.geographic, this.props.unit);
    }

    componentWillReceiveProps(nextProps) {
        this.search(nextProps.geographic, nextProps.unit);
    }

    search(coordinates, unit) {
        if((coordinates.longitude && coordinates.latitude) !== 0) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&APPID=d87dbcdd5af33f7b33168db052c38feb&units=${unit}`)
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
    }
    
    render() {
        return (
            <div>
            <div className="App-forecast">
            {this.state.geographic && <Geographic interval={this.state.geographic}  unitInfo={this.props.unitInfo} />}
            </div>
            </div>
        );     
    }
}

export default FormGeographic;