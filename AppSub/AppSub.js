import React from 'react'

const subelement = (props) => {
	return(
		<div id={props.id}>
			<div onClick={props.click} className="name">{props.name}</div>
			<div className="age">{props.age}</div>
            <input type='text' onChange={props.change} value={props.name}></input>
		</div>
	)
}
// subelement.propTypes = {
// 	name:,
// 	age:'',
// 	id:'',
// }
export default subelement