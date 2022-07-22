import React from "react";

const Card = ({ meal }) => {
  return (
    <li className="card">
        <h2>{meal.strMeal}</h2>
        <p>{meal.strArea}</p>
      <img
        src={meal.strMealThumb}
        alt={"presenattion of receipt of " + meal.strMeal}
      />
      <div className="instruction">
        <p>{meal.strInstructions}</p>
      </div>
    </li>
  );
};

export default Card;