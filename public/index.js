"use strict";
// explicit types
let character;
let age;
let isLoggedIn;
character = 'Yoshi';
age = 30;
isLoggedIn = true;
// arrays
let ninjas = [];
// union types
let mixed = [];
let uid;
uid = 10;
uid = '10';
// objects
let ninjaOne;
let ninjaTwo;
ninjaTwo = {
    name: 'Yoshi',
    age: 30,
    beltColor: 'black',
    id: 10,
};
// any type
let id;
id = 10;
id = '10';
let mixedArray = [];
mixedArray.push(10);
mixedArray.push('10');
mixedArray.push(true);
let greet;
const add = (a, b, c = 10) => {
    console.log(a + b);
};
const minus = (a, b) => {
    return a - b;
};
