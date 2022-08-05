"use strict";
// const anchor = document.querySelector('a')
// const anchor = document.querySelector('a')!
// console.log(anchor?.href)
// const form = document.querySelector('form')
/* ------ Classes ------ */
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invoiceOne = new Invoice('mario', 'website', 200);
const invoiceTwo = new Invoice('luigi', 'website', 400);
console.log(invoiceOne, invoiceTwo);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
/* ------ Form ------
   Type Casting (as) - allows to get all properties of an object */
const form = document.querySelector('.new-item-form');
/* ------ Inputs ------ */
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
