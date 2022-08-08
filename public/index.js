import Invoice from './classes/Invoice.js';
import ListTemplate from './classes/ListTemplate.js';
import Payment from './classes/Payment.js';
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
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
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
    let values = [
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    ];
    let doc;
    type.value === 'invoice'
        ? (doc = new Invoice(...values))
        : (doc = new Payment(...values));
    list.render(doc, type.value, 'end');
});
/* ------ Tuples ------ */
let arr = ['ryu', 25, true];
let tup = ['ryu', 25, true]; // can't change the types position
/* ------ Generics ------ */
const addUID = (obj) => {
    // extends {name: string}
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
/* ------ Enums ------ */
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
    ResourceType[ResourceType["LIST"] = 5] = "LIST";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceName: ResourceType.PERSON,
    data: 'miguel',
};
const docFour = {
    uid: 2,
    resourceName: ResourceType.LIST,
    data: ['bread', 'paper'],
};
