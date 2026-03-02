import React from "react"

function DisplayList({foods, setFoods, cuisine}){
	// to delete the clicked item
	// function handleClick(id){
	// 	const newFoodArray = foods.filter(food => food.id !== id)
	// 	setFoods(newFoodArray)
	// }
	//to update the cliked item
	function handleClick(id){
		const newFoodArray = foods.map(food => {
			const newHeatLevel = food.heatLevel + 1
			if (food.id === id)
				return {...food, heatLevel: newHeatLevel}
			return {...food}
		})
		setFoods(newFoodArray)
	}

	const foodList = foods.map(food => {
		if (cuisine == "All" || food.cuisine == cuisine)
			return <li onClick={() => handleClick(food.id)} key={food.id}>{food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine} </li>
		else
			return <></>
	})
	return(
		<>{foodList}</>
	)
}

export default DisplayList
