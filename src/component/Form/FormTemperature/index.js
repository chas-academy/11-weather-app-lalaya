import React, { Component } from 'react';
import './FormTemperature.css';

function toCelsius(farenheit) {
    return (farenheit - 32) * 5 / 9; 
}

function toFarenheit(celsius) {
    return (celsius * 9 / 5) + 32; 
}