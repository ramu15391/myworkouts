import React from 'react'

const subelement = props => {
	return(
		<React.Fragment>
			<div onClick={props.click} className="name">{props.name}</div>
			<div className="age">{props.age}</div>
			<input type='text' onChange={props.change} value={props.name}></input>
		</React.Fragment>
	)
}
// subelement.propTypes = {
// 	name:,
// 	age:'',
// 	id:'',
// }
export default subelement