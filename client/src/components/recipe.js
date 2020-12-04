import React, { useState } from "react";
import RecipeDetails from "./recipe-details";
import "../css/main.css"

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  // var coll = document.getElementsByClassName("collapsible");
  // var i;

  // for (i = 0; i < coll.length; i++) {
  //   coll[i].addEventListener("click", function () {
  //     this.classList.toggle("active");
  //     var content = this.nextElementSibling;
  //     if (content.style.display === "block") {
  //       content.style.display = "none";
  //     } else {
  //       content.style.display = "block";
  //     }
  //   });
  // }

  return (
    // <div class='card'>
    // <div class='card-container'>
    //   <div class='card u-clearfix'>
    <div class='card-body'>
      <div className="recipe">
        <h2 class="card-read">{label}</h2>
        <span class="card-description subtle"></span>
        <img src={image} alt={label} class="card-media" />
        <a href={url} target="_blank" rel="noopener noreferrer">
          URL
      </a>
        {/* <div class="card-read">Ingredients */}
        <button class="collapsible" onClick={() => setShow(!show)}>Ingredients</button>
        {show && <RecipeDetails ingredients={ingredients} />}
        <div class="card-shadow"></div>
      </div>
    </div>
    // </div>
    //   </div>
    // </div>
    // </div>
  );
};

export default Recipe;