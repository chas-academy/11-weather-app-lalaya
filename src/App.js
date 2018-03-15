import React, { Component } from 'react';
import { Header, Content, Search, FormHourly, FormDay, FormGeographic, Footer } from './component'; 
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content>
          <Search />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
