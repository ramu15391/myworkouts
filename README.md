# myWorkouts

## readme configuration 
* [Read me file rules](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code)

## TsLint
* [rules for Tslint](https://palantir.github.io/tslint/rules/)

## git configuration for adding existing project to remote repository

* [git configuration](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)

## what-is-the-temporal-dead-zone

* [what-is-the-temporal-dead-zone](https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone)
* [link 2](http://jsrocks.org/2015/01/temporal-dead-zone-tdz-demystified)

# Function scope vs Block Scope
## var — function scope
As mentioned, a variable being declared using var will be function scoped, meaning it will exist within the scope of the function it’s declared inside of.

```
function myFunc() {  
  var name = 'Luke'
  console.log(name); // 'Luke'
}
myFunc();
console.log(name); // name is not defined  
```
* As you can see, the variable declared with var inside the function, is not reachable from outside the function.

* With that said, other types of blocks — like if-statements, loops etc — will not be considered as a scope.

```
    if(true) {  
      var name = 'Luke'
    }
    console.log(name); // 'Luke'  
```
* Using var, the variable name is available outside the if-statement it was declared inside of. This is because they're in the same scope.

* However, with the introduction of ES6, two new ways of declaring variables were introduced.


# React chat
* [React chat forum] (https://spectrum.chat/react)

### Arrow => () vs Declaration() functions why use both ? 

* I find it easier to be consistent and use arrows for everything. The only time I've found I absolutely cannot use one is when defining an object method that refers to this:

```
const person = {
  name: "oli",
  sayName: function() {
    return this.name;
  }
}
```
* if you used an arrow for that this would be undefined

* There are two cases that you might consider not to use arrow funtiona. 1 double nesting of arrow can cause problems with this and 2 returning an object literal has a funny syntax that you might consider to avoid

* This talk is very relevant (and great talk btw): https://www.youtube.com/watch?v=hO7mzO83N1Q

### Best tutorials on server side rendering with react?

* 0 eventually I used the following two as guides to create a Custom boilerplate with CRA

* 1 https://tylermcginnis.com/react-router-server-rendering/

  With routing, and 

* 2 https://github.com/babel/example-node-server Because you can then use ES6 ‘import’ statements inside your node server


# StyledComponent

https://stackoverflow.com/questions/42796584/dynamic-theme-in-styled-components/42899979#42899979

https://github.com/styled-components/awesome-styled-components

https://spectrum.chat/thread/54887141-57a9-4386-807c-ed950c4d5132
https://medium.com/styled-components/styled-components-getting-started-c9818acbcbbd


Small tiny pieces as components.

## 1. Focused components:-

Class names are an implementation details.
<button classname="btn"></button>
<button classname="btn-primary"></button>

Bcoz we are using components which still nedd to be aware of specifically which class name they need to attach to the dom to render what they want

Encapsulate class within component and do not expose.
We can abstract those classname within component and just use a property to classify btn component.

Abstraction
U dont need to know what the property does, instead u pass the property and it will just render the view.

There is a contract b/w developer and the component, i,e the primary property passed to the component.

Here btn is the component which renders based on primary property.

## 2. containers and components

```
class test{
  componentdidmount(){
    fetch(){
      res
    }
  }
  render()
  {
    return(
      <sidebar>props</sidebar>
    )
  }
}

```

### container(functionality)
### componenet(UI)
* Decouple both help us easy to find where issue occurs, whether in data or UI.

## Styling Best Practices

* 1. Single-use classes
* 2. Components as a styling construct

### Single-use classes

Reuse component everywhere, not the component classname.
If we use single classname it is easy to figure out where the pbm occurs. 

### Components as a styling construct

* styling in js, styling using component
* Remove the mapping b/w styles(css) and components(dom)

* if a class name used single time, why do we need it?
* className is just used for mapping with an Dom and styling

``` 
const StyledError = styled.h1 ` -- it is a function
  color: red;               
  border: 1px solid red;      // these are args to the function
  padding: 1rem;
  width: 100%;
  display: flex;
`
```
* All of ur css loaded in header. when css files used.

* We can use media query in styled component.

## React Components

### Stateless Components

* When a component has no reason to deal with states, it is irrelevant to use a class to define the component. You can make   use of just functions if all is required in a component is props:

```
function CommentDisplay(props) {
  return <div>
            <div>{props.counterProp}</div>
        <br />
        <button onClick={props.incrementCounter}>+</button>
        <button onClick={props.decrementCounter}>-</button>
        </div>
}
```

https://scotch.io/ 

# Styling in react

 1. Inline styling
 2. External css File
 3. Modular css ?????
 4. styled components