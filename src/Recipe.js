import React from "react";
import style from "./recipe.module.css"

const Recipe = (props) => {
    return <div className={style.recipe}>
        <h1>{props.title}</h1>
        <p>Calories: {Math.floor(props.calories)}</p>
        <img className="img" src={props.image} alt={props.title} />
        <p>Ingredients:</p>
        <ol>{props.ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
        ))}</ol>
    </div>
}

export default Recipe;