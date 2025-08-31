const name="deepu"
const repoCount=50
//old method
//console.log(name + repoCount+"value")
console.log(`hello my name is ${name} and my repocount is ${repoCount}`)

//initialize of string

const name2=new String("deepu-ch")
console.log(name2)
console.log(name2[1])
console.log(name2.__proto__)
console.log(name2.length)
console.log(name2.toUpperCase())
console.log(name2.charAt(3))
console.log(name2.indexOf("u"))

const newString=name2.substring(0,4) //cant take negative always stsrt with 0
console.log(newString)

const anotherString=name2.slice(-8,4)
console.log(anotherString)

const newStringOne="      deeepu       "
console.log(newStringOne)
console.log(newStringOne.trim())//remove space start and end

const url="https://deepu.com/deepu%20chauhan"
console.log(url.replace('%20',"-"))
console.log(name.split('-'))