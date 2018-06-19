import React from 'react';

const single = 'single';

const double = "dou'b'le";

const backtick = `bacfktick`;

const semispace= 'semicolon space' ; 

const add = (arg) => {
    console.log("test") ; 
}

class demo {
    render(){ 
    return (
    <React.Fragment><div>test</div></React.Fragment>);
 }
}


function newFunction() {
    return "semicolon";
}
/*Node	 Browser
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