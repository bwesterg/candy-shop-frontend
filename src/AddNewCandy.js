import React, { Component } from "react"
import "./AddNewCandy.css"

export default class AddNewCandy extends Component {

    state = {
        newCandy: {
            name: "",
            origin: "",
            price: 1,
            image: "",
        }
    }

    handleChange = property => event => {
        const newCandy = this.state.newCandy
        newCandy[property] = event.target.value
        this.setState({ newCandy })
    }

    addCandy = event => {
        event.preventDefault()

        const { name, origin, price, image } = this.state.newCandy
        this.props.addCandy({ name, origin, price, image })

        this.setState({
            newCandy: {
                name: "",
                origin: "",
                price: 1,
                image: "",
            }
        })
    }

    render(){
        return(
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
        )
    }
}