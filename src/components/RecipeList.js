import React, { Component } from "react";
import Recipe from './Recipe'; 
import RecipeSearch from './RecipeSearch'; 


export default class RecipeList extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello from list</h1>
        <RecipeSearch></RecipeSearch>
        <Recipe></Recipe>
      </React.Fragment>
    );
  }
}
