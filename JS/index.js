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
p.walk();
// console.log(p);
p2 = new Person("adam");
p2.walk();

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
