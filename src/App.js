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
    base_url:
      "https://www.food2fork.com/api/search?key=0b7aec6da8c42b47bfee9f7ed32b2f91",
    details_id: 35384,
    pageIndex: 1,
    search: "",
    query: "&q=",
    error: ""
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();

      if (jsonData.recipes.length === 0) {
        this.setState(() => {
          return {
            error: "Sorry your search did not return any results"
          };
        });
      } else {
        this.setState(() => {
          return {
            recipes: jsonData.recipes
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  displayPage = index => {
    switch (index) {
      case 1:
        return (
          <RecipeList
            value={this.state.search}
            recipes={this.state.recipes}
            handleDetails={this.handleDetails}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
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
    this.setState({
      search: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { base_url, query, search } = this.state;

    this.setState(
      () => {
        return {
          url: `${base_url}${query}${search}`,
          search: ""
        };
      },
      () => {
        this.getRecipes();
      }
    );
  };
  render() {
    // console.log(this.state.recipes);
    return (
      <React.Fragment>{this.displayPage(this.state.pageIndex)}</React.Fragment>
    );
  }
}
