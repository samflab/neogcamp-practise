// CONVERT TO  ES6 SYNTAX
/* 
  1.  var aloo = 1;
if (aloo == 1) {
   var a = 2;
   console.log(a);
}
console.log(aloo);
*/

const aloo = 1;
if(aloo === 1){
    const a = 2;
    console.log(a);
}
console.log(aloo);

/* 
    2. var multiply = function(x, y) {
  return x * y;
};
 */

const multiply = (x,y) => x*y;

/*
    3. var customer = {
  name: "Bhaalo"
};
var card = {
  amount: 20,
  product: "Aaalo",
  unitprice: 50
};
var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"
*/

const customer = {
    name: "Bhaalo"
};
const card = {
    amount: 20,
    product: "Aloo",
    unitprice: 50
};

const message = `Hello ${customer.name} wants to buy ${card.amount} ${card.product} for price of ${card.unitprice} per piece`;

/*
    4. var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
CEO = Neog[0],
Mentor = Neog[2];
*/

var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"]
var [CEO, ,Mentor] = Neog
console.log(CEO, Mentor)

/* 5. var arr = ["MA", "TA", "PA", "CA"];
var firstName = arr[0],
var surname = arr[1];
console.log(firstName);
console.log(surname); */

var arr = ["MA", "TA", "PA", "CA"];
var [firstname, surname] = arr;
console.log(firstname)
console.log(surname)


/* 6. var Aaloo = "Tasty";
var Bhaloo = "Cute";
var Obj = {
  Aaloo: Aaloo,
  Bhaloo: Bhaloo
};*/
var Aaloo = "Tasty";
var Bhaloo = "Cute";
var Obj = {
  Aaloo, Bhaloo
};

/* 7. var a = 5;
var b = 10;
console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, ".")); */

var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);

/* 8. var arithmeticsObj = {
  sum: function sum(num1, num2) {
    return num1 + num2;
  },
  multiply: function multiply(num1, num2) {
    return num1 * num2;
  }
}; */

var arithmeticsObj = {
    sum: (num1, num2) => num1 + num2,
    multiply: (num1, num2)=> num1 * num2 
  };

/*
 9. var avengers = {
  operation: "Assemble",
  members: [
    {
      ironMan: "Tony Stark"
    },
    {
      captainAmerica: "Steve Rogers"
    },
    {
      blackWidow: "Natasha Romanoff"
    }
  ]
};
var operation = avengers.operation,
  members = avengers.members;
*/

var avengers = {
    operation: "Assemble",
    members: [
      {
        ironMan: "Tony Stark"
      },
      {
        captainAmerica: "Steve Rogers"
      },
      {
        blackWidow: "Natasha Romanoff"
      }
    ]
  };
  var {operation, members} = avengers

  /* const packIt = (...args) => console.log(args)

packIt(1,2,3,5,5) */


  const packIt = function(...args){ return console.log(args) }

  packIt(1,2,3,5,5)