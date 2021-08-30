import React, { Component } from 'react';
import AddNewCandy from './AddNewCandy';
import './App.css';

import CandyList from "./CandyList"

const BASE_URL = "http://localhost:3000"

class App extends Component {
  state = {
    candies: [],
  }

  componentDidMount(){
    const url = `${BASE_URL}/candies`
    fetch(url)
      .then(response => response.json())
      .then(candies => {
        this.setState({ candies })
      })
  }

  addCandy = candy => {
    fetch(`${BASE_URL}/candies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: json.stringify(candy)
    }).then(response => response.json())
    .then(candy => {
      this.setState({
        candies: [...this.state.candies, candy],
      })
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
          <AddNewCandy addCandy={this.addCandy} />
        </main>
      </div>
    );
  }
}

export default App;
