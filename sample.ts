const str = "could n't"; // avoid escape, single quote rule applied

var strd ='';  // no duplicate variable declaration when using var keyword

// By default the compiler will detect redeclarations of let and const variables.

function demo(strd: string) { // "no-shadowed-variable"
    var strd='';  // "no-duplicate-variable": true 
}
var strd =''; 


console.log('Tslint config'); // "no-console": false