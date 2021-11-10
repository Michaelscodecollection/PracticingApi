import React, { useState, useEffect } from "react";
import "./App.css";
import Recipes from "./components/Recipes";
const App = () => {
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "14b3579a";
  const APP_KEY = "daea9de5ceb6b645e880f48bed9b0eab";

  //okay so we grab the API information that we were given. we have our key, Id, and feth link.

  useEffect(() => {
    getRecipies();
  }, []);
  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  //here we create our fetch. we create our response variable, which will within it harness our fetch.
  //our response in this instance is just what the computer is recieving when it fetches infromation with the key and id to that speicifc API.
  // once we have our response, which we console.log, we place the infromation we want to manipulate into a variable we will call data. we go to console.log to see where our foods are and we see it is harnessed in the hits section. so target data.hits and we set that to recipies.
  return (
    <div className="App">
      <h1> Hello! This is my API!</h1>
      <form className="">
        <input />
        <button></button>
      </form>
      {recipes.map((recipe) => (
        <Recipes
          title={recipe.recipe.label}
          recipe={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
