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
