# Learn-ES6

mkdir es6
cd es6
npm init -y
npm install --save-dev webpack
code .

clear
npm run build

-> When using npm: npm install webpack-cli -D
-> When using yarn: yarn add webpack-cli -D
error : use  __dirname + '/build',

npm install babel-core babel-loader webpack-dev-server babel-preset-es2015 babel-polyfill --save-dev

---- after install config all- 
run : npm start


babel-preset-es2015
babel-preset-stage-2


Link babel example : https://babeljs.io

npm install  babel-preset-es2015&&  npm install  babel-preset-es2016 
npm install  babel-preset-es2015 && babel-preset-es2016 

spread operator : {}
rest parameters: function (...){};

// Helper methods

The map method creates new array by calling a function on individual elements in an original array

The filter method creates new array based on an orginal array and a creatain test on each of its elements

Handled in es6 via export, import key
arrow function is anonymous functions

//es6 built help method
String manipulation and number checking

String.repeat() , startsWith ,endsWitth , include
Number checking for type and safety

// JavaScript Prototypes
Classes are extractions on top of JavaScript prototypes
A prototype reveals an object's parent.
All objects -Arrays, Dates, etc hava a prototypes.

// Set no duplicate value
// Map have keys and values
// Maps share much similarity to object
// Maps beat objects with superior keys and the size property

//ES 6 Generators
Break the typical 'run to completion model of functions
Generators can pause ,and resume with yield and next()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*

