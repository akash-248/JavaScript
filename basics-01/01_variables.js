const accountId = 356776;
let accountEmail = "akash@gmail.com";
var accountPassword = "34567";
accountCity = "Nashik"; // bad practice

let accountState; // undefined

// accountId = 2; // not allowed because of it is a constant variable.


 // run time changes
accountEmail = "rxtcyug@Email.com"; 
accountPassword = "354678987";
accountCity = "Sambhajinagar";


// console.log(accountState);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/* 
prefer not use var because of issue
in block scope and functional scope
*/