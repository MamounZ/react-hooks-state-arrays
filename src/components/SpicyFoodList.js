import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";
import DisplayList from "./DisplayList"

function SpicyFoodList() {

  const [foods, setFoods] = useState(spicyFoods);
  const [cuisine, setCuisine] = useState("All")

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray)
  }

  function handleChange(event){
    setCuisine(event.target.value)
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <p>You selected: {cuisine}</p>

      <ul><DisplayList foods={foods} setFoods={setFoods} cuisine={cuisine}/></ul>
    </div>
  );
}

export default SpicyFoodList;
