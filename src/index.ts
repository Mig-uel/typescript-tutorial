import Invoice from './classes/Invoice'

// const anchor = document.querySelector('a')
// const anchor = document.querySelector('a')!
// console.log(anchor?.href)
// const form = document.querySelector('form')

const invoiceOne = new Invoice('mario', 'website', 200)
const invoiceTwo = new Invoice('luigi', 'website', 400)

let invoices: Invoice[] = []
invoices.push(invoiceOne)
invoices.push(invoiceTwo)

invoices.map((inv) => {
  console.log(inv.client, inv.amount, inv.format())
})

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

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber)
})
