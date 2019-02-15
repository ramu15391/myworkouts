import React from 'react'
import ReactDOM from 'react-dom'
import Layout  from './component/Layout/Layout'
import AppSub from './AppSub/AppSub'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import BurgerIngredients from './component/Burger/BurgerIngredients/BurgerIngredients'
import { MobxDemo } from './state'
import MediaCarousel from './Carousel'


class Demo extends React.Component {
	constructor(){
		super()
		this.state = {
			person:[
				{id:'name1', name:'rama', age:'27'},
				{id:'name2', name:'ganesh', age:'27'},
				{id:'name3', name:'sai', age:'27'}
			],
			status: false
		}
	}
	mobxDemo = new MobxDemo()
	
	clickHandler(newname) {
		this.setState({
			person:[
				{id:'name1', name: newname, age:'27'},
				{id:'name2', name:'ganesh', age:'27'},
				{id:'name3', name:'sai', age:'27'}
			]
		})
	}
  toggleHandler = () => {
	  const status = this.state.status;
	  console.log(status);
  	this.setState({status: !status})
  }
	
	getKeyValue = (e) =>{
		console.log(e.keyCode);
	}
  render() { 
  	let renderPerson = null;

  	console.log("mobx!!!", this.mobxDemo.isData)
  	if(this.state.status){
  		renderPerson = this.state.person.map((personEl,index) => (
  			<AppSub key={personEl.id} name={personEl.name} age= {personEl.age}></AppSub>) 
  		);		
  	}
	  
    
  	return (
  		<React.Fragment>
  			{renderPerson}
				<div tabIndex="1" onClick={this.toggleHandler}>gokul</div>
				<div  tabIndex={1} onKeyDown ={this.getKeyValue}>snake</div>
				<MediaCarousel/>
  		</React.Fragment>
  	)
  }   
}
var app =(
	<React.Fragment>
		<Demo name="rama" />
	</React.Fragment>
)
ReactDOM.render(app, document.getElementById('app'))

/*Node	 Browser 			  <Layout><p>test</p></Layout> <BurgerBuilder><BurgerIngredients type="BreadBottom"/></BurgerBuilder>
 Node doesn’t have a predefined “window” object cause it doesn’t have a window to draw anything.
 “window” is a predefined global object which has functions and attributes, that have to deal with window that has been drawn.

 “location” object is related to a particular url; that means it is for page specific. So, node doesn’t require that.	 “location” is another predefined object in browsers, that has all the information about the url we have loaded.
 Ofcourse Node doesn’t have “document” object also, cause it never have to render anything in a page.	 “document”, which is also another predefined global variable in browsers, has the html which is rendered.

 Node has “global”, which is a predefined global object. It contains several functions that are not available in browsers, cause they are needed for server side works only.	 Browsers may have an object named “global”, but it will be the exact one as “window”.
 “require” object is predefined in Node which is used to include modules in the app.	 Browsers don’t have “require” predefined. You may include it in your app for asynchronous file loading.

 In Node everything is a module. You must keep your code inside a module.	 Moduling is not mandatory in client side JavaScript, i.e. in browsers.
 Node is headless.	 Browsers are not headless. "Headless" in this context simply means without a graphical display. (i.e.: Console based.)
 
 Node processes request object.	 Browsers processes response objects.
As both of them are JavaScript executor, and Node uses the JavaScript engine of a browser (Chrome), so differences are not much there. It is just the Node wrapper which has been written on top of  JavaScript V8 Runtime engine, which is deleting few objects and also including some according to the requirement of Node.*/


/* * "git merge" used to allow merging two branches that have no common
   base by default, which led to a brand new history of an existing
   project created and then get pulled by an unsuspecting maintainer,
   which allowed an unnecessary parallel history merged into the
   existing project.  The command has been taught not to allow this by
   default, with an escape hatch "--allow-unrelated-histories" option
   to be used in a rare event that merges histories of two projects
   that started their lives independently.


 * "git pull" has been taught to pass the "--allow-unrelated-histories"
   option to underlying "git merge".*/