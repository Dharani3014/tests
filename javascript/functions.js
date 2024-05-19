/*arrow function(moodern js) fat arrow function were introduced in ECMAScript 2015(ES6) and provide a 
concise way(it means easy to write) to write functions in javascript

**they utilize the => syntax, and they hava a few different syntax options depending on the situation.

*/
/*
three lines la iruka code ahh one line ku vara mari write pannurathu

#normal function(syntax)      #arrow function(syntax)   
function(parameters){         (parameter)=>{
      youur logic               //your logic                
}                              }
*/
//different ways of function

//1st way:
function aa(){
    console.log("techno");
}
aa();

//2nd way:
// function expression

const bb = function aa(){
    console.log("techno from expression");
}
bb();

//3rd way:
//Anonymous function(function ku name ahh vaikama variable use panni pannurthu)

const anofun = function (){
    console.log("techno from anonymous");
}
anofun();

// simple arrow function create pannura way(suggested variable is const)

const cc = () =>{
    console.log("techno from arrow function");
}
cc();

// arrow function with single argument:(when you use single parameter don't need use paranthesis)

const onearg = x =>{
     return x+x;
}
const result = onearg(31);
console.log(result);

//arrow function with multiple arguments:

const twoarg = (x,y) =>{
    return x*y;
}
const solution=twoarg(1,7);
console.log(solution);

//one line code of arrow function with multiple arguments

const two =(x,y) => (x+y);
console.log(two(30,31));
