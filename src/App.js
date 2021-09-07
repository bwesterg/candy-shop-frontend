import React, { Component } from 'react';
import CandyList from "./CandyList"

import AddNewCandy from "./AddNewCandy";
import './App.css';


const BASE_URL = "http://localhost:3000"

class App extends Component {
  state = {
    candies: [],
    isAddNewCandyShowing: false,
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
    fetch("http://127.0.0.1:3000/candies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(candy)
    }).then(response => response.json())
    .then(candy => {
      this.setState({
        candies: [...this.state.candies, candy],
      })
    })
  }

  toggleAddNewCandy = () => {
    this.setState({
      isAddNewCandyShowing: !this.state.isAddNewCandyShowing
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
          <button onClick={this.toggleAddNewCandy}>Click to add a candy</button>
          {
            this.state.isAddNewCandyShowing
              ? <AddNewCandy addCandy={this.addCandy} />
              : null
          }
          
          
        </main>
      </div>
    );
  }
}

export default App;
