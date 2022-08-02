// explicit types
let character: string
let age: number
let isLoggedIn: boolean

character = 'Yoshi'
age = 30
isLoggedIn = true

// arrays
let ninjas: string[] = []

// union types
let mixed: (string | number | boolean)[] = []

let uid: number | string
uid = 10
uid = '10'

// objects
let ninjaOne: object
let ninjaTwo: { name: string; age: number; beltColor: string; id: number }

ninjaTwo = {
  name: 'Yoshi',
  age: 30,
  beltColor: 'black',
  id: 10,
}

// any type
let id: any
id = 10
id = '10'

let mixedArray: any[] = []
mixedArray.push(10)
mixedArray.push('10')
mixedArray.push(true)

let greet: Function

const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b)
}

const minus = (a: number, b: number): number => {
  return a - b
}

// type alias
type StringOrNumber = string | number
type ObjWithName = { name: string; uid: StringOrNumber }

const logDetails = (uid: StringOrNumber, item: string): void => {
  console.log(`${item} has a uid of ${uid}`)
}

greet = (user: ObjWithName): void => {
  console.log(`Hello ${user.name}`)
}

// function signature
// example 1
let hello: (a: string, b: string) => void

hello = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`)
}

// example 2
let calc: (a: number, b: number, c: string) => number

calc = (numOne: number, numTwo: number, action: string): number => {
  if (action === 'add') {
    return numOne + numTwo
  } else {
    return numOne - numTwo
  }
}

// example 3
let logIt: (obj: { name: string; age: number }) => void

type person = { name: string; age: number }

logIt = (ninja: person): void => {
  console.log(`${ninja.name} is ${ninja.age}`)
}
