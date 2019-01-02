import React from 'react'
import Aux from '../../Auxi/Auxi'

const layout = props => {
    return(<Aux>
        <div>sidebar, toolbar</div>
        <div>{ props.children } </div>
    </Aux>)
}
export default layout;