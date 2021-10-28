// JavaScript Challenge:
//
// * Note: for exercises 1 and 2, don’t use built-in Array methods. Use only loop control flow statements like while, for, and do-while.

// 1) Create a function that receives an array of positive integers and returns an array with only the input’s pair numbers.
// For example:
// [INPUT]  array = [1,2,3,4];
// [OUTPUT] array = [2, 4];

const pairNumbers = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// 2) Create a function that receives a String as parameter and returns a Boolean value indicating if the word is a palindrome* or not.
// *a word or group of words that is the same when you read it forwards from the beginning or backwards from the end: "Refer" and "level" are palindromes.

const palindrome = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Built-in Array methods solution.
//
// const palindrome = (string) => {
//     let newString = string.split("").reverse().join("");
//     if (newString === string) {
//         return true;
//     } else {
//         return false;
//     }
// };

// 3) Using any JavaScript object creation pattern, create a Car object with the following attributes and methods:
//   *Attributes
//   String: make *  String: model *  boolean: turnedOn *  int: engineDisplacement (cylinder volume) *  int: year
//   *Methods:
//   boolean: isOn() *  void: turnOn() *  void: turnOff() *  String: toString() [returns year, make, model and the engine displacement (cc)] * String: getMarketingData() [returns make, model and year]

class Car {
  constructor(make, model, year, engineDisplacement) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.engineDisplacement = engineDisplacement;
    this.turnedOn = false;
  }
  isOn() {
    return this.turnedOn;
  }
  turnOn() {
    this.turnedOn = true;
  }
  turnOff() {
    this.turnedOn = false;
  }
  toString() {
    return `${this.year} ${this.make} ${this.model} ${this.engineDisplacement}cc`;
  }
  getMarketingData() {
    return `${this.make} ${this.model} ${this.year}`;
  }
}

// 4) Create a Bicycle object with only the make [String] , model [String] and year [int] attributes and no methods. Instantiate it and print to the console its internal state calling the getMarketingData method from the Car object.

class Bicycle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

let bicycle = new Car("Bike", "Bike", "2019");
console.log(bicycle.getMarketingData());
