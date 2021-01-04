/// setup => download vscode
//    download nodejs
//  || create a folder in mypc
//  || in this folder create a file like fundamental.js
//  || to run js go to terminal and type node (file name)

/// variable

let user = 'nahid'; //string type
let num = 12; //int type

/// let vs const => when u should let and when you should const

/// const cannot be reassigned i mean apni const akbar value assign korle next a change korte parben nah. But apni let a parben.

let user2 = 'rakib';
user2 = 'abid';
console.log(user2); //abid

// const user3 = 'rakib';
// user3 = 'abid';
// console.log(user3); ///error

//// Function part
/// how to define a function in js
function showMessage() {
  console.log('hellow everyone');
}
showMessage();

/// local variable in function => apni function ar vitor variable declare korle seta function body r vitor chara baire use korte parben nah

function localFunction() {
  let message = "Hello, I'm JavaScript!"; // local variable

  console.log(message);
}

localFunction(); // Hello, I'm JavaScript!

// function localFunction() {
//   let message = "Hello, I'm JavaScript!"; // local variable

// }
// console.log(message);  /// error
// localFunction();

//// Outer variable : function r baire variable thakle apni seta func r vitor use korte parben
// let userName = 'John';

// function showMessage() {
//   let message = 'Hello, ' + userName;
//  console.log(message)
// }

// showMessage(); // Hello, John

///parameter : => parameter shb somoi  function call hobar somoi define kore dite hoi

function showAnything(num1, num2) {
  let result = num1 + num2;
  return result;
}
console.log(showAnything(3, 5));

/// return :> A function can return a value back into the calling code as the result.
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert(result); // 3
