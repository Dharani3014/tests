var a = 30;
console.log(a);

//example1
var price=10;
var product ="biscuit";
var tax=2;
console.log(product);
var totalamt=price + tax;
console.log("biscuit price is "+totalamt);

//alert
window.alert("welcome to the javascrpit");
console.log("you are in confusion state");
/*variable
1.let
2.const
3.var(globalscope or functionalscope  it can access it anywhere inside outside*/
//var globalscope
var name="dharanim";
function fname()
{
    console.log(name);
}
console.log(name);
fname();

//var functional scope(it can access only inside the function and not outside the function)
// var laname="vembu";

function lname()
{
    var lastname="vembu";
    console.log(lastname);
}
 lname();
 //console.log(laname);
// laname();


//declaring multiple variables
var mark1,mark2=30,mark3;
mark1=10;
mark2=30;
mark3=31;
console.log(mark1 + mark2 + mark3);

document.write(mark1 + mark2 + mark3);

//
var x;
console.log(x);

//
var myname="suba";
myname="karuou";
console.log(myname);

/*$$$name;  $name;  Name$name(this three are valid variable)
Name name; 1name;(not a valid variable)
Name1name; _name; _$name;(its a valid variable)
return;56name;name$@#;(its not a valid variable)
 */

//redeclaring var and updating values can be done
var aok="aaa";
aok="bbb";
aok="ccc";
console.log(aok);
document.write(aok);
aok="ddd";
console.log(aok);

//if we print variable without declaring and assigning value we get undefined
//var lok;
console.log(lok);
var lok="home";
//console.log(lok);

//!hoisting

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
let demo=document.getElementById('demo');
myFn=(p1,p2)=>{
    return p1*p2;
}
let res=myFn(2,3);
console.log(res);
demo.innerHTML=res;


//example1
let demo1=document.getElementById('demo');
myFn1=(p1)=>{
    console.log(p1);
    demo1.innerHTML=p1;
}
myFn1("Dharani");

//objects

let person={
    names:'vembu',
    age:21
};
let {names,age}=person;//destructure format
console.log(names,age);

//const

const name1="balakumar";
const dob="05-06-2004";
let msg="my name is " + name1 + "and i born on"+dob;
document.write(msg);
console.log(msg);

/*
static type language(need to specify the variable type)
example:c,java

String n="anbu";//string

*/

//dynamic type language(no need to specify the variable type)
//eg languages:javascript,PHP,python,ruby

let eman="dharanipriya";//string
let ega=22;//int
let isyoung= true; //boolean
let emanl=undefined;//undefined
let tro= null //null

//objects

let tour={
    place:'yercaurd',
    date:21/ 4/2024,
    time:6.00,
    saysomething:'enjoy the trip'
    // ooru: {
    //    fist:'water',
    //    take:'money'
    // }
}
console.log(tour.place);//this is dot notation
console.log(tour.date);//this is dot notation
console.log(tour.time);//this is dot notation
console.log(tour.saysomething);//this is dot notation

//bracket notation in object
console.log(tour['place']);//this is dot notation
console.log(tour['date']);//this is dot notation
console.log(tour['time']);//this is dot notation
console.log(tour['saysomething']);//this is dot notation

//arrays

let favcolors=["black","green","blue"]
favcolors[3]="white";
favcolors[4]=30;
console.log(favcolors);
console.log(favcolors[2]);
console.log(favcolors.length);

//functions
//example1
function universe(ao){
    //set of statements
   // let ao="hello"
    let bo=ao + ",this is dharani."
    console.log(bo);
}
universe()
universe("goodmorning")
universe("goodevening")
universe("goodnight")

//example2

function galaxy(oa,ob,oc)
{
   let okay="hello " + oa+"i'm dharanimohanraj " + ob + "tharamangalam "+ oc;
   console.log(okay);
}
galaxy("who are you?","you are from?","yay! good thankyou!!!")
// galaxy("you are from?")
// galaxy("yay! good thankyou!!!")

//add two number

function addtwo(one,two)
{
   let add= one+two;
   console.log(add);
}
addtwo(30,13)

//operators
//arithmetic

let no1=4;
let no2=3;
console.log(no1 + no2);
console.log(no1 - no2);
console.log(no1 * no2);
console.log(no1 / no2);
console.log(no1 % no2);
console.log(no1 ** no2);

//increment(++)
console.log(++no1);
console.log(no2++);
console.log(no1++);
console.log(++no2);

//decrement(--)
console.log(--no1);
console.log(no2--);
console.log(no1--);
console.log(--no2);

//assignment operators)

let xx=7;
xx++;
xx=xx+1;
xx=xx%2;
console.log(xx);

//comparison operator

let u=2;
let w=7;
//relational operator
console.log(u>w);
console.log(u>=w);   //output wil be in true or false
console.log(u<w);
console.log(u<=w);

// strict equality operator(same datatypes + same value)
console.log(u===w);
console.log(u !== w);

//in string comparison

let m="dhara";  //dictionary
let n="vembu";
console.log(m > n);
console.log(m < n);


//comparison of different types

console.log('1'< 5); //1<5
console.log(false == 0);
console.log(true == 0);
console.log(true == 1);
//1 - true
//0 - false

//lose equality operator
console.log(1 == 1); //no == no
console.log('1' == 1); //str == no
console.log(true == '0'); 
console.log(true == '1'); 

//ternary operator

// workflow
// if person's age is more than 18,
//they are 'adult' category,otherwise,
//they are a 'Child' category

let val=18;
let ag = val > 18 ? 'adultchild' : 'child'
document.write(ag);