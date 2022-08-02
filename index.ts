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
