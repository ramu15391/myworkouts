import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import className from './Burger.css'

const Burger = props => {
    
	const BurgerIngredient = Object.keys(props.ingredients).map(igKey => {
		console.log('[...Array(props.ingredients[igKey])] ', [...Array(props.ingredients[igKey])])
		//console.log('[...Array(props.ingredients[igKey])] ', BurgerIngredient)
		return <BurgerIngredients type={igKey} >{'hhhhh'}</BurgerIngredients>
    })
	console.log('BurgerIngredient', BurgerIngredient)
	//console.log('BurgerEl ',BurgerEl);
	return(
		<div className={ className.BurgerCont }>
		<BurgerIngredients type='BreadTop'>{'uuuu'}</BurgerIngredients>
			{BurgerIngredient}
		<BurgerIngredients type='BreadBottom'>{'uuuu'}</BurgerIngredients>
    
		</div>
	)
}

export default Burger