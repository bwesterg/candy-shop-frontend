import React, { Component } from 'react';
import './App.css';
import CandyList from "./CandyList"

const BASE_URL = "http://localhost:3000"

class App extends Component {
  state = {
    candies: [],
    newCandy: {
      name: "",
      origin: "",
      price: 1,
      image: "",
    }
  }

  componentDidMount(){
    const url = `${BASE_URL}/candies`

    fetch(url)
      .then(response => response.json())
      .then(candies => {
        this.setState({ candies })
      })
  }


  handleChange = property => event => {
    const newCandy = this.state.newCandy
    newCandy[property] = event.target.value
    this.setState({ newCandy })
  }

  addCandy = event => {
    event.preventDefault()

    const { name, origin, price, image } = this.state.newCandy
    fetch(`${BASE_URL}/candies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, origin, price, image })
    }).then(response => response.json())
    .then(candy => {
      this.setState({
        candies: [...this.state.candies, candy],
        newCandy: {
          name: "",
          origin: "",
          price: 0.00,
          image: ""
        }
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
          <section className="add-candy">
            <h2>Add a Candy</h2>
              <form onSubmit={this.addCandy}>
                <input 
                  type="text" 
                  placeholder="name" 
                  value={this.state.newCandy.name} 
                  onChange={this.handleChange("name")}
                />
                <input 
                  type="text" 
                  placeholder="origin" 
                  value={this.state.newCandy.origin} 
                  onChange={this.handleChange("origin")}
                />
                <input 
                  type="number" 
                  placeholder="price" 
                  min="0.1" 
                  max="10" 
                  value={this.state.newCandy.price} 
                  onChange={this.handleChange("price")}
                />
                <input 
                  type="text" 
                  placeholder="image link" 
                  value={this.state.newCandy.image} 
                  onChange={this.handleChange("image")}
                />
                <input 
                  type="submit" 
                  value="Add Candy" 
                />
              </form>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
