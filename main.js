// var, let, const
// String, Numbers, Boolean, null, undefined

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof rating);

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template String 
const hello = `My name is ${name} and I am ${age}`;
console.log(`My name is ${name} and I am ${age}`);
console.log (hello);

const s = 'Hello World!'
console.log(s.substring(0, 5).toUpperCase());
console.log(s.length);
console.log(s.split(''));

// Arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5);
const fruits = ['apples', 'oranges', 'pears',];

fruits[3] = 'grapes';

fruits.push('mangos');

fruits.unshift('strawberries');

fruits.pop();

console.log(Array.isArray('hello'));

console.log(fruits.indexOf('oranges'));

console.log(fruits);


const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

person.email = 'john@gmail.com';
const { firstName, lastName, address: { city }} = person;
console.log(city);
console.log(person.hobbies[1])
console.log(person);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 1,
        text: 'Dentist appt',
        isCompleted: false
    },
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For

for(let i = 0; i <= 10; i++){
    console.log(`For Loop Number: ${i}`);
}

for(let todo of todos){
    console.log(todo.text);

}
// While
let i = 0;
while(i < 10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

// forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);


const r = 4;
const e = 10;

if(r === 10) {
    console.log('r is 10');
} else if (r > 10) {
    console.log('r is greater than 10');
} else {
    console.log('r is less than 10');
}

if(r > 5 || e > 10) {
    console.log('r is more than 5 or y is more than 10');
}

const p = 10;

const color = p > 10 ? 'red' : 'blue';
console.log(color);

switch(color) {
    case 'red':
      console.log('color is red');
      break;
    case 'blue':
      console.log('color is blue');
      break;
    default:
      console.log('color is NOT red or blue');
      break;
}

// function

function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}
console.log(addNums(5, 5));
// the same thing but different way

const addNum = (num1 = 1, num2 = 1) => {
    console.log(num1 + num2);
}
addNum(5, 5);

// Constructor function

function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear ();
}
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// Class (same as before but doing it in a different way)
class Persona {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear () {
        return this.dob.getFullYear ();
    }
    getFullName () {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1);
console.log(person2.firstName);
console.log(person2.dob);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());


