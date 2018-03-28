/* //example use module
import { fellowship, total} from './fellowship'
console.log(fellowship, total)

import { add} from './math'
console.log(add(5,10))

// use default export 
import multiply from './math'
console.log(multiply(1,2))

// example function
function hello() {
    let message = "Hello";
    console.log(message);
}

hello()
let a= ['A','B','C','D','E'];
let b = ['F','G','H', ...a];
console.log(b)


function collect(...a){
    console.log(a)
}

collect(1,2,3,4,5,6)

// destructuring array ,object
let animas =["AAA", "BBB", "CCC"]
let a1 = animas[0]
let a2 = animas[1]
console.log(a1,a2)
// object
let son = {name :'Simba', parents: 2}
let name, parents
({name , parents} = son)
console.log(name,parents)

// map example
let values = [20,30,40]

let doubled = values.map((n)=> {
    return n*2
})
console.log(doubled)

// filter example
let points = [7,16,22,24,5]
let highScores = points.filter((n)=>{
    return n > 15
})
console.log(highScores)

//repeat string
let repeat = "wooh"+ "o".repeat(20)
console.log(repeat)
// use string literal
let repeat1 = `woo${"oo".repeat(20)}`
console.log(repeat1)

// check with Number
const addToCart = (item, number) => {
  //  return Number.isFinite(number)
    return Number.isSafeInteger(number)
}
// console.log(addToCart('shirt',Infinity))
console.log(addToCart('shirt', Math.pow(2,54))) */


/* /// use class Example
import Animal from './animal'

let king = new Animal("Demo", 4.5)
king.hello()
// static method demo
Animal.staticMethodDemo()
 */

/* // Prototype example
function Wizard(name ,house ,pet){
    this.name = name
    this.house = house
    this.pet = pet
    this.greet = () => `I'm ${this.name} from ${this.house}`
}

Wizard.prototype.pet_name;
// not use arrow function with proptype
Wizard.prototype.info =function() {
    return ` I have a ${this.pet} name ${this.pet_name}`
}

let harry = new Wizard("Harry Potter" ," Gryffindor" , "Owl");
harry.pet_name = "Hedwig"
console.log(harry.info()) */

/* let numbers = [5,6,7,8,9]
let numSet = new Set(numbers)
for( let element of numSet.values()){
    console.log(element)
}

// example use map
let demoMap = new Map();
let key_1 = "string key"
demoMap.set(key_1, "return value for a string key")
console.log(demoMap)

// create new Map
let string = 'asfasfdsafwroqwrjiqojfoancaqreqpioui'
let letters = new Map()
for (let i = 0 ; i< string.length; i++){
    let letter = string[i]
    if (!letters.has(letter)){
        letters.set(letter, 1)
    } else {
        letters.set(letter, letters.get(letter)+ 1)
    }
}
console.log(letters) */

/* // closure example
let call = () => {
    let secret = 'ES6 rocks!'
    let reveal = () => {
        console.log(secret)
    }
    return reveal
}
// assign new object
let unveil = call();
unveil()

// function factories example
const addSuffix = (x) => {
    const concat = (y)=> {
        return y+ x;
    }
    return concat;
}
let add_ness = addSuffix("ness")
console.log(add_ness)
let h = add_ness("happi");
console.log(h)


// anonymous function factories
const product = (x)=>{
return (y)=> {
    return y*x;
}
}
let mult5 = product(5)
console.log(mult5(3))

// compact function factories
const productCompact = x => y => y*x
let mult5Demo = productCompact(5)
console.log(mult5Demo(10)) */


// example use private functions
import budget from './private'
let wallet = budget()
wallet.deposit(20)
wallet.withdraw(-10)
console.log(wallet.check())

// example use generator
/* function * countMarket() {
    let count = 0;
    while( count < 4) {
        yield count +=1
    }
}

let countGen = countMarket()
console.log(countGen.next().value)
console.log(countGen.next().value)
console.log(countGen.next().value)
console.log(countGen.next().value) */

// controlling flow with generators
/* function * evens(){
    let count = 0
    while (true ) {
        count +=3
        yield count
    }
}

let sequence = evens()
console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value) */

// add value to generators es 6
/* function* evens(){
    let count = 0
    while (true){
        count += 2
        let reset = yield count
        if ( reset == 2) {
            count = 0
        } 
        console.log('Reset Data' + reset )
    }
}

let sequence = evens()
console.log(sequence.next().value) // 2
console.log(sequence.next().value) //4
console.log(sequence.next().value) // 6
console.log(sequence.next(2).value) // 2
console.log(sequence.next().value) // 4 */

/* const arrayIterator = (array) => {
    let index = 0;
    return {
        next:() => {
            if (index< array.length){
                let next=  array[index];
                index+=1;
                return next;
            }

        }
    }

}
let it = arrayIterator([1,2,3,4])
console.log(it.next()) */
/* function * arrayIterator() {
    // yield *arguments
    // yield* expression is used to delegate to another generator or iterable object.
    for (let arg of arguments){
        yield arg
    }
}

var it = arrayIterator(1,2,3);
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value) */


// Example use Promise
/* let p = new Promise((resolve, reject) => {
   // resolve('Resolved promise data')
 //  reject('Rejected promise data')
    setTimeout(() => resolve('Resolved promise data') ,3000)
})
p.then(response => console.log(response)).catch(error => console.log(error)) */

// fake api online https://jsonplaceholder.typicode.com/posts/1
/* 
const root = 'https://jsonplaceholder.typicode.com/posts/1';
fetch( root, { method : "GET"}).then(response => response.json())
.then(json => console.log(json)) */


// Example es 2016
//let a  = Math.pow(2,5) 
let a = 2 **5
console.log(a)

let b = [2,3,4,5,6].includes(7)
console.log(b)

/* // es 2017
let obj = { a: 'one', b: 'two', c:'three'}
let keys = Object.keys(obj)
console.log(keys)
let values = Object.values(obj)
console.log(values)

let entries = Object.entries(obj) //  array[2] : 0 : 'b', 1:'two'
for (let entry of entries){
    console.log(` key : ${entry[0]}, value :${entry[1]}`)
}
console.log(entries)
 */

// es8 proposal -async
async function async_one(){
    return "one"
}

async function async_two(){
    return "two"
}

async function async_three(){
    const one = await async_one()
    console.log(one)
    const two = await async_two()
    console.log(two)
}

async_three()