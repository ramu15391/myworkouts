import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import className from './Burger.css'

const Burger = props => {
    
    const BurgerIngredient = Object.keys(props.ingredients).map(igKey => {
        console.log('[...Array(props.ingredients[igKey])] ', [...Array(props.ingredients[igKey])])
        //console.log('[...Array(props.ingredients[igKey])] ', BurgerIngredient)
		return [...Array(props.ingredients[igKey])].map((k, i) =>{
            console.log('igKey', igKey);
            console.log('k', k);
            console.log('i', i);
            <BurgerIngredients type={igKey} key={igKey+i}>hhhhh</BurgerIngredients>
        });
    })
    console.log('BurgerIngredient', BurgerIngredient)
	//console.log('BurgerEl ',BurgerEl);
	return(
		<div className={ className.BurgerCont }>
        
                <BurgerIngredients type='cheese'>hhhhh</BurgerIngredients>
    
		</div>
	)
}

export default Burger