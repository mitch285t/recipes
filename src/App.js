import React from 'react';
import './App.css';
import Form from './Form.js'
import Recipe from './Recipe.js'

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {recipes: []}
  }


  displayRecipes = () => {
    return this.state.recipes.map(recipe => <Recipe recipe={recipe} /> )
  }




  onFormSubmit = (formData)  => {
      this.setState({
        recipes: 
        [
          ...this.state.recipes, formData
        ]
      })
  }

  render() {
    console.log(this.state.recipes)
    return ( 
      <div>
        <div>
          <Form onFormSubmit={this.onFormSubmit}/>
        </div>
      
        <div className="recipe-list">
          {this.displayRecipes()}
        </div>

      </div>
     
    )
  }
}
export default App;
