import React from 'react'
import Aux from '../../Auxi/Auxi'

class BurgerBuilder extends React.Component{
    render(){
        return(
            <Aux>
                <div>Burger Contents</div>
                <div>{this.props.children}</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;