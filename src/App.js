import React, { Component } from 'react';
import './App.css';
import CandyList from "./CandyList"

class App extends Component {
  render(){
    return (
      <div className="App">
        <header>
          <h1>Candy Shop!</h1>
        </header>
        <main>
          <section>
            <h2>Candies</h2>
            <CandyList />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
