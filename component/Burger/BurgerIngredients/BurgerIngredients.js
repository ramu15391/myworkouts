import React from 'react'
import classes from './BurgerIngredient.css'

const burgerIngredients = props => {
	let ingredient = null
	console.log('props.type', props.type)
	console.log('BreadBottom.type', classes)
	console.log('BreadBottom.type', classes[0])
	switch(props.type){
        
	case ('BreadBottom'):
		ingredient = <div test={classes.BreadBottom} className={ classes.BreadBottom }>jjjj</div>
		break
	case ('BreadTop'):
		ingredient = <div className={ classes.BreadTop }>jjj</div>
		break
	case ('Meat'):
		ingredient = <div className={ classes.Meat }></div>
		break
	default:
		ingredient = <div className={ classes.BreadBottom }></div>
		break
	}
	return ingredient
}

export default burgerIngredients