// primitive data types
// number
// string
// boolean
// undefined
// null
// bigint
// symbol

// console.log(typeof "1");
// console.log(typeof 1);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null); // object
console.log(1 == true); //true
// var a = 1;

// function foo(input) {
//   input = 2;
//   console.log(input); // 2
// }
// foo(a);
// console.log(a); // 1

// var b = 5;
// var c = b;
// b = 6;
// console.log(b, c); // 6, 5

// // coersion
// const result = true + false;
// console.log(result);

// console.log("1" == 1); // true
// console.log("1" === 1); // false

//truthy and falsy value
/* const a = undefined
if(a !== undefined){
  console.log("true")
}else{
  console.log("false")
} */

// // object

// var obj = {};
// console.log(obj);

// var obj2 = new Object();
// console.log(obj2);

// var obj3 = Object.create({});
// console.log(obj3);

// class MyObject {
//   constructor(name) {
//     this.name = name;
//   }
// }

// var obj4 = new MyObject("nicole");
// console.log(obj4);

// function
// function foo() {}

// foo.a = "nicole";
// console.log(foo.a);

// var arr = [1, 2, 3];
// console.log(arr);

// var obj = { name: "a" };
// function foo2(input) {
//   input.name = "b";
//   console.log(input); // b
//   console.log(input === obj);
// }
// foo2(obj);
// console.log(obj); // b

// var obj2 = { name: "a" };
// function foo3(input) {
//   input = { name: "b" };
//   console.log(input);
//   console.log(input === obj);
// }
// foo3(obj);
// console.log(obj2);

// primitive data (value), non primitive data (reference)

// declare variables
//            var      |    let     |    const
// scope:   function      block         block
// hoist:   yes           no            no
// redeclare  yes         no            no
// reassign   yes         yes           no

// function foo4() {
//   var a;
//   console.log(a);
//   if (true) {
//     var a = 1;
//   }
//   console.log(a);
// }

// foo4();

// function foo5() {
//   // console.log(a); // not defined vs undefined
//   if (true) {
//     let a = 1;
//   }
//   // console.log(a);
// }

// foo5();

// var a; // declaration
// var a = 1; // assignment
// a = 2;
// console.log(a);

// let b = 1;
// b = 2;
// console.log(b);

// const c = 1;
// c = 2;

// const o = { name: "nicole" };
// o.name = "adam";
// // o = {};
// console.log(o);

// console.log(foo3());
// function foo() {
//   console.log("in the function");
// }

// const foo3 = () => {
//   console.log("in the function");
// };

// class

class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(this.name + " is walking...");
    }
}

const p = new Person("nicole");
// p.__proto__.walk = function () {
//   console.log(this.name + " is walking...");
// };
// Person.prototype.walk = function () {
//   console.log(this.name + " is walking...");
// };
// p.walk = function () {
//   console.log(this.name + " is walking...");
// };
//p.walk();
// console.log(p);
p2 = new Person("adam");
//p2.walk();

// // constructor function
// function Person1(name) {
//   this.name = name;
// }

// const p1 = new Person1("nicole");
// console.log(p1);

// function Person2(name) {
//   let obj = {};
//   obj.name = name;
//   obj.__proto__ = Person2.prototype;
//   return obj;
// }

// const p2 = Person2("nicole");
// console.log(p2);

// __proto__: instance
// prototype: class

//prototype chain, javascript inheritance
//oop(object oriented programming language) principle:
/* 
  inheritance
  polymorphism
  encapsulation
  abstraction
*/

//overriding: same method name in child class will over write the method from parent class
//overloading(NA in js): same method name with different set of argument
class Employee extends Person {
    constructor(name, salary) {
        super(name);
        this.salary = salary;
    }

    walk() {
        console.log("employee", this.name, "is walking...");
    }
    work() {
        console.log(this.name + " is working...");
    }
}

const employee = new Employee("adam", 1000);

employee.walk(1000); //employee
employee.work();
console.log(employee.name);
console.log(employee.salary);

//prototype chain
/* 
class Manager extends Employee {

} */
/* 
  instance method
  prototype method: will be accessed by all the child instance
  static method
*/
//class constructor function: factory create instance
//prototype:
//instance
employee.__proto__.getPaid = function () {
    //typeError
    console.log(this.name, "get paid");
};

//instance method
/* employee.getPaid = function(){//typeError
  console.log(this.name, "get paid");
}
 */

const employee1 = new Employee("Nicole", 2000);

console.log(employee1);
employee1.getPaid(); //reference

//static method
Employee.meet = function () {
    console.log("meeting!");
};

//object literal

const obj = {};
//const obj = new Object()
console.log(obj.hasOwnProperty);

// instance and class

console.log(employee1.hasOwnProperty);
//employee1 => Employee class => Person class => Object class => hasOwnProperty

console.log(typeof typeof obj); //string

console.log(employee1 instanceof Employee); //true

console.log(obj instanceof Employee); //false

//console.log(typeof array);//object

console.log(typeof function () {}); //function

const foo = function () {};
foo.a = 1;
console.log(foo.a);
console.log(foo instanceof Object);
console.log(foo instanceof Function);

/* 
non-primitive type: passed by reference
  object is object
  array is object
  function is object
*/

/* const array1 = new Array();
console.log(array1) */
const array = [1, 2, 3];
console.log(array);
console.log(array[1]);
/* 
  array method: 
    forEach, map, filter, find,
    reduce, sort
    slice, splice
    findIndex, indexOf, 
    join
    pop push shift unshift
*/

/* for(let i = 0; i < array.length; i++){
  console.log(array[i])
} */

/* 
  what: 
    array method, function
    arg: function(arg:element, index, array)
    return nothing
  why: functional programming, common javascript
  how: loop through the elements of the array and call the callback with arg of each element
*/
// forEach
const returnedValue = array.forEach(function (element) {
    console.log(element);
});
console.log(returnedValue);

/* 
  what: 
    array method, function
    arg: function(arg:element, index, array), return element value
    return array, each element being the value return from the callback
  why:
  how: 
*/
//map
const returnedValue1 = array.map(function (element) {
    console.log(element);
    return element + 1;
});
console.log(returnedValue1 === array); //false

/* 
  what: 
    array method, function
    arg: function(arg:element, index, array), return boolean
    return array, each element being the value return from the callback
  why:
  how:
*/
//filter
const returnedValue2 = array.filter(function (element) {
    if (element % 2 === 0) {
        return true;
    } else {
        return false;
    }
});
console.log(returnedValue2); //length: 1, [2]

/* Array.prototype.forEach = function(){
  console.log("substitute foreach")
} */

//overriding
/* array.forEach(function(element){ //1,2,3
  console.log(element)
})
 */
/* 
  instance method:
    define a method for an instance only
  prototype method
    define a method for all instances from a class
    advantage: saves memory
*/

//this: is the instance who calls the function
Array.prototype.myForEach = function (callback) {
    const array = this;
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
};

array.myForEach(function (element) {
    console.log(element);
});

//sum up all the element of the array, 6

/* 
  what:
    array method, function
    args: function(accumulator, current, index, array, return nextAccumulator), initial value
  why: reduce the elements from an array into one
  how: loop each element of the array and call the callback with argument of the element and reduce into a result
*/

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
console.log(sum); //6

sum = array.reduce(function (accumulator, current) {
    return accumulator + current;
}, 0);

console.log(sum);

Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        const currentValue = this[i];
        accumulator = callback(accumulator, currentValue, i, this);
    }
    return accumulator;
};
sum = array.myReduce(function (accumulator, current) {
    return accumulator + current;
}, 0);

console.log(sum);
