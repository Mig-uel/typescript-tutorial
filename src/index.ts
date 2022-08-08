import Invoice from './classes/Invoice.js'
import ListTemplate from './classes/ListTemplate.js'
import Payment from './classes/Payment.js'
import HasFormatter from './interfaces/HasFormatter.js'

// Interface: is a blueprint for a class or object that defines what properties and methods a class must have to be considered a valid type.
// interface IsPerson {
//   name: string
//   age: number
//   speak(a: string): void
//   spend(a: number): number
// }

// const me: IsPerson = {
//   name: 'shaun',
//   age: 30,
//   speak(text: string): void {
//     console.log(text)
//   },
//   spend(amount: number): number {
//     console.log(`i spent ${amount}`)
//     return amount
//   },
// }

// let docOne: HasFormatter
// let docTwo: HasFormatter

// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Payment('mario', 'plumbing work', 200)

// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)

/* ------ Classes ------ */
// const invoiceOne = new Invoice('mario', 'website', 200)
// const invoiceTwo = new Invoice('luigi', 'website', 400)

// let invoices: Invoice[] = []
// invoices.push(invoiceOne)
// invoices.push(invoiceTwo)

// invoices.map((inv) => {
//   console.log(inv.client, inv.amount, inv.format())
// })

// const anchor = document.querySelector('a')
// const anchor = document.querySelector('a')!
// console.log(anchor?.href)
// const form = document.querySelector('form')

/* ------ List Template Instance ------ */
const ul = document.querySelector('ul')
const list = new ListTemplate(ul!)

/* ------ Form ------
   Type Casting (as) - allows to get all properties of an object */

const form = document.querySelector('.new-item-form') as HTMLFormElement

/* ------ Inputs ------ */
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let doc: HasFormatter

  type.value === 'invoice'
    ? (doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber))
    : (doc = new Payment(tofrom.value, details.value, amount.valueAsNumber))

  list.render(doc, type.value, 'end')
})

/* ------ Generics ------ */
const addUID = <T extends object>(obj: T) => {
  // extends {name: string}
  let uid = Math.floor(Math.random() * 100)
  return { ...obj, uid }
}

let docOne = addUID({ name: 'yoshi', age: 40 })

/* ------ Enums ------ */
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
  LIST,
}

/* ------ Generics With Interfaces ------ */
interface Resource<T> {
  // how an object or class should be structured
  uid: number
  resourceName: ResourceType
  data: T
}

const docThree: Resource<string> = {
  uid: 1,
  resourceName: ResourceType.PERSON,
  data: 'miguel',
}

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: ResourceType.LIST,
  data: ['bread', 'paper'],
}
