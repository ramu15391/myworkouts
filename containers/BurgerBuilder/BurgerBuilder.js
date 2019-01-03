import React from 'react'
import Aux from '../../Auxi/Auxi'
import Burger from '../../component/Burger/Burger'

class BurgerBuilder extends React.Component{
    state = {
    	'Cheese': 1,
    	'Meat' : 2,
    	'Bacon': 1
    }
    render(){
    	return(
    		<Aux>
    			<div>Burger Contents</div>
    			<Burger ingredients={ this.state }></Burger>
    		</Aux>
    	)
    }
}

export default BurgerBuilder