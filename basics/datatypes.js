//primitive datatypes(call by value)means copy m cahnges honge

//7 types:
//String,Number,Boolean ,null ,undefined ,Symbol(value ko umique bannane k liye use krte h),BigInt.

//js is dynamic types language, beacuse im this we cannot defiend datatypes
const score=100
const scoreValue=100.33
const isLogged=false
const outTemperature=null
console.log(typeof(outTemperature))//output object
let userEmail;
const id=Symbol(101)//always unique that why symbol use
const id2=Symbol(101)
console.log(id===id2)// false
const bigNumber=87687686n

//Refrence (non primiive orginal value pr kam krte h)
//types: Arrays ,Objects,functions
//array
const names=["ansh","raj","anamn"]

//object
let obj={
    name:"deepu",
    age:22
}

const myFunction =function()
{
    console.log("hello")
}
console.log(typeof(myFunction))//output :function object