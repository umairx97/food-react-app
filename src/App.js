import React, { Component } from "react";
import "./App.css";

// Components
import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
// import Recipe from "./components/Recipe";
import RecipeDetails from "./components/RecipeDetails";

export default class App extends Component {
  state = {
    recipes: recipes,
    url:
      "https://www.food2fork.com/api/search?key=0b7aec6da8c42b47bfee9f7ed32b2f91",
    details_id: 35384
  };

  // async getRecipes() {
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();

  //     this.setState({
  //         recipes: jsonData.recipes
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // componentDidMount() {
  //   this.getRecipes();
  // }

  render() {
    // console.log(this.state.recipes);
    return (

      <React.Fragment>
        {/* <RecipeList recipes={this.state.recipes} /> */}
        <RecipeDetails id={this.state.details_id} />
      </React.Fragment>
    );
  }
}
