import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const Burger = props => {
    
    const ingredients = Object.keys(props.ingredients)
	const BurgerIngredient = ingredients.map(igs => {
		<BurgerIngredients type={ igs }></BurgerIngredients>
	})
	console.log(ingredients);
	return(
		<div className=''>
			{BurgerIngredient}
		</div>
	)
}

export default Burger