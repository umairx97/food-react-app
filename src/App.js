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
    details_id: 35384,
    pageIndex: 1, 
    search: ''
    
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

  displayPage = index => {
    switch (index) {
      case 1:
        return (
          <RecipeList
            value = {this.state.search}
            recipes={this.state.recipes}
            handleDetails={this.handleDetails}
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
          />
        );

      case 0:
        return (
          <RecipeDetails
            id={this.state.details_id}
            handleIndex={this.handleIndex}
          />
        );

      default:
        return null;
    }
  };

  handleIndex = index => {
    this.setState({
      pageIndex: index
    });
  };

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  };

  handleChange = event => { 
    console.log('hello from  handle change ')
    
  }

  handleSubmit = (event) => { 
    event.preventDefault(); 
    console.log('hello from handle submit ')
  }
  render() {
    // console.log(this.state.recipes);
    return (
      <React.Fragment>{this.displayPage(this.state.pageIndex)}</React.Fragment>
    );
  }
}
