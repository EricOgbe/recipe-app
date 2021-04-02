import React, { useState, useEffect } from "react";
import Recipe from  "./Recipe.js"
import './App.css';

function App() {
  const app_id = "31dab3c3"
  const apiKey = "caad03d7df346921961b89f44b2c6b47"
  
  
  const [recipes,setRecipes] = useState([]);
  const [search, setSearch] = useState("")
  const [query,setQuery] = useState("chicken")

  var request =`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${apiKey}`


  useEffect(() => {
   getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(request);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data)
  }

   const updateSearch = (event) => {
     setSearch(event.target.value);
     
   }

   const getSearch = (event) => {
     event.preventDefault();
     setQuery(search);
     setSearch("");
   }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="searchForm">
        <input className="searchBar" type="text" placeholder="Search" value={search} onChange={updateSearch} ></input>
        <button className="searchButton" type="submit">Submit</button>
      </form>
     <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        Key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
