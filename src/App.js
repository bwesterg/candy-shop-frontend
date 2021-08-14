import React, { Component } from 'react';
import './App.css';
import CandyList from "./CandyList"

class App extends Component {
  state = {
    candies: []
  }

  componentDidMount(){
    const url = "http://localhost:3000/candies/"
    fetch(url)
      .then(response => response.json())
      .then(candies => {
        this.setState({ candies })
      })
  }

  render(){
    return (
      <div className="App">
        <header>
          <h1>Candy Shop!</h1>
        </header>
        <main>
          <section>
            <h2>Candies</h2>
            <CandyList 
              candies={this.state.candies} 
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
