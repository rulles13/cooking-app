import React from "react";

const Card = ({ meal }) => {
  return (
    <li className="card">
        <h2>{meal.strMeal}</h2>
        <p>{"Origin: " + meal.strArea}</p>
      <img
        src={meal.strMealThumb}
        alt={"presenattion of receipt of " + meal.strMeal}
      />
      <div >
        <p className="instruction">{meal.strInstructions}</p>
      </div>
    </li>
  );
};

export default Card;