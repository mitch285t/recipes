import React, { Component } from 'react'  

class Recipe extends Component {

    render() {
        return (
            <div className="recipe-card">
                <h2> {this.props.recipe.name} </h2>
                <p> {this.props.recipe.ingredients}</p>
                <p> {this.props.recipe.steps}</p>
                <p> {this.props.recipe.difficulty}</p>
            </div>
        )
    }



}
export default Recipe;