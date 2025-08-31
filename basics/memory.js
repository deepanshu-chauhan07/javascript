//stack memory is used in primitive datatype(works onn copy value )
let myNme="deepu"
let anotherName=myNme
anotherName="chauhan"
console.log(myNme)
console.log(anotherName)



//heap memeory is used in non primitive datatype(works on moriginal value)
let userOne=
{ email:"deepu@gamil.com",
    age:22
}
let userTwo=userOne
userTwo.email="xya2@gmail.com"//user one m bhi change hoga kyuki refrence pass horha h copy nhi
console.log(userOne)
console.log(userTwo)