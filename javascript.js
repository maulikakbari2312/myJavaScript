// let user = {
//     name: "John",
//     age: 30
//   };
  
//   user.sayHi = function() {
//     console.log(this.name);//this means user
//   };

  
// user.sayHi();  

//////////////////////////////////////////////////////////////
// mark !! is often used as a shorthand to convert a value to its corresponding boolean representation. It's a common technique to coerce a value into either true or false.
// var value = 42;

// var booleanValue = !!value;

// console.log(booleanValue); // true

// /////////////////////////////////////////////////////////////////

// let user = {
//   firstName :  "maulik",
//   sayHi() {
//      function arrow(){ console.log(this.firstName)};
//     arrow();
//   }
// };
// firstName =  "Ilya",

// user.sayHi.call(this.firstName); 

///////////////////////////////////////////////////////////
// let user1 = {
//   firstName: "Ilya",
//   sayHi() {
//     let arrow = () => console.log(this.firstName);
//     arrow();
//   }
// };  

// user1.sayHi(); 

/////////////////////////////////////////////////////////////////

let filename = "productIsUpdate_1694157785";
let parts = filename.split('_');
let number = parts[parts.length - 1];

let isValid = true;
let a= 123
 
for (let i = 0; i < number.length; i++) {
  if (!Number.isNaN(parseInt(number[i]))) {
    // Character is a valid digit
    continue;
  } else {
    // Character is not a digit
    isValid = false;
    break;
  }
}

if (isValid) {
  console.log("Valid number is :", number);
} else {
  console.log("Invalid number is:", number);
}
