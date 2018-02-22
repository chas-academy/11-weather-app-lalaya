import React, { Component } from 'react';
import { Header, Content, FormGeo, FormHourly, FormDay, FormWeeks, Footer } from './component'; 
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content>
          <FormGeo />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
