import React from "react";
import style from "../style/recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li key={ingredients.id}>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories:{calories}</p>
      <img src={image} alt="" className={style.image} />
    </div>
  );
};

export default Recipe;
