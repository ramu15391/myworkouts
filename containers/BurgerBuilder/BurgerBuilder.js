import React from 'react'
import Aux from '../../Auxi/Auxi'
import Burger from '../../component/Burger/Burger'

class BurgerBuilder extends React.Component{
    state = {
        ingredients:{
            'Cheese': 1,
            'Meat' : 2,
            'Bacon': 1
        }
    }
    render(){
    	return(
    		<Aux>
    			<div>Burger Contents</div>
    			<Burger ingredients={ this.state.ingredients }></Burger>
    		</Aux>
    	)
    }
}

export default BurgerBuilder