import React, { Component } from "react";
import "./App.css";

// Components
import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
import Recipe from "./components/Recipe";
import RecipeDetails from "./components/RecipeDetails";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <RecipeList />
        <RecipeDetails />
      </React.Fragment>
    );
  }
}
