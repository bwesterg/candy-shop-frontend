import React, { Component } from 'react';
import './App.css';
import CandyList from "./CandyList"

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
    const url = "http://localhost:3000/candies/"
    fetch(url)
      .then(response => response.json())
      .then(candies => {
        this.setState({ candies })
      })
  }

  handleNameChange = event => {
    this.setState({
      newCandy: {
        ...this.state.newCandy,
        name: event.target.value
      }
    })
  }

  handleOriginChange = (event) => {
    this.setState({
      newCandy: {
        ...this.state.newCandy,
        origin: event.target.value
      }
    })
  }

  handlePriceChange = (event) => {
    this.setState({
      newCandy: {
        ...this.state.newCandy,
        price: event.target.value
      }
    })
  }

  handleImageChange = (event) => {
    this.setState({
      newCandy: {
        ...this.state.newCandy,
        image: event.target.value
      }
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
              <form>
                <input 
                  type="text" 
                  placeholder="name" 
                  value={this.state.newCandy.name} 
                  onChange={this.handleNameChange}
                />
                <input 
                  type="text" 
                  placeholder="origin" 
                  value={this.state.newCandy.origin} 
                  onChange={this.handleOriginChange}
                />
                <input 
                  type="number" 
                  placeholder="price" 
                  min="0.1" 
                  max="10" 
                  value={this.state.newCandy.price} 
                  onChange={this.handlePriceChange}
                />
                <input 
                  type="text" 
                  placeholder="image link" 
                  value={this.state.newCandy.image} 
                  onChange={this.handleImageChange}
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
