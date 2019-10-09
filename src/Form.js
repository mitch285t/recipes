import React, { Component } from 'react'  


class Form extends Component { 
    

    
    constructor() {
        super()
        this.state = {
        name: "",
        ingredients: "",
        steps: "",
        difficulty: "hard"
    }
}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state)
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            <label>Ingredients:</label>
            <input type="text" name="ingredients" value={this.state.ingredients} onChange={this.handleChange} />
            <label>Steps:</label>
            <input type="text" name="steps" value={this.state.steps} onChange={this.handleChange} />
                <div>
                    <select name="difficulty" onChange={this.handleChange}>
                        <option value="hard">Hard</option>
                        <option value="medium">Medium</option>
                        <option value="easy">Easy</option>
                    </select>
                </div>
            <input type="submit" value="Add Recipe" />
        </form>
        )
    }
}
export default Form;