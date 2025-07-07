const accId=902190
var emailId="majjarirekha123@gmail.com"
let passWord="2109309"
accCity="Banglore"

//accId=0 //Error will be shown because we cant change variables that are assigned with const keyword
console.log(accId)
console.table([accId,emailId,passWord,accCity])
//console.table is used to print multiple variables

/*
    we will not use var bcoz of the scope of javascript
*/
let accState;
console.table([accId,emailId,passWord,accCity,accState]) //for acc state we will get the result as undefined