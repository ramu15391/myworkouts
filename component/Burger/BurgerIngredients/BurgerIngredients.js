import React, {Component} from 'react'
import classes from './BurgerIngredient.css'
import PropTypes from 'prop-types'

class BurgerIngredients extends Component {
	render() {

		let ingredient = null
		console.log('props.type', this.props.type)
		console.log('BreadBottom.type', classes)
		console.log('BreadBottom.type', classes[0])
        
		switch(this.props.type){    
		case ('BreadTop'):
			ingredient = <div className={ classes.BreadTop }>jjjj</div>
			break
		case ('BreadBottom'):
			ingredient = <div className={ classes.BreadBottom }>jjjj</div>
			break
		case ('Salad'):
			ingredient = <div className={ classes.Salad }>jjjj</div>
			break
		case ('Cheese'):
			ingredient = <div className={ classes.Cheese }>jjjj</div>
			break
		case ('Bacon'):
			ingredient = <div className={ classes.Bacon }>jjj</div>
			break
		case ('Meat'):
			ingredient = <div className={ classes.Meat }></div>
			break
		default:
			ingredient = null
		}
		return ingredient
	}
}
// BurgerIngredients.propTypes = {
//     type: PropTypes.string.isRequired,
// }
export default BurgerIngredients
export { BurgerIngredients }