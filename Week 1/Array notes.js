//WHAT IS AN ARRAY?

//  An ordered Data Structure
// var nameofVariable = ["values","inside","brackets","between", "commas"]
//Table of an  holds the place of the values in an "INDEX"
//The first number in an index is always 0.

//condenses multiple values into one item
//from:
var firstname = "America"
var lastName = "Ocampo"
var email = "a@gmail.com"
//to:
var user = ["America","Ocampo","a@gmail.com"]


//TO ADD DATA
//nameofvariable.push() is a function that calls the  and adds item to the end of the list
//      (value you are adding needs to be inside the parantheses in the function above)
user.push("123-456-7890")
user.push(29)

//TO REMOVE DATA
//user.pop() is a function that removes the last value in an .
var removedValue = user.pop()
user.pop()
console.log("removed value from pop", removedValue)
console.log("user after pop", user)

//ACCESS DATA
console.log("LAST NAME:", user[1])
console.log(user[2])

//UPDATE DATA
//if you want to update a first name to a nickname
user[0] = "Ame"
console.log("USER AFTER FIRST NAME CHANGE:", user[0])

//LENGTH OF AN 
//There is no limit to how long an  can get, we can check the length of an .
//The length of an  is always index + 1.

console.log("LENGTH OF :",user.length)

//ACCESS THE LAST VALUE IN AN 
console.log(user[user.length-1])

//ACCESS FIRST VALUE IN AN 
console.log(user[0])

//Usually arrays will be pre-existing and we will not have know to what they contain

//WHAT CAN WE STORE INSIDE OF AN ARRAY
//unlimited but should follow conventions to be useful

//WHAT SHOULD WE STORE INSIDE OF AN ARRAY
//  1. All values inside of an array, should be the same data type.
        //all numbers, all strings, all booleans, etc
//  2. All values inside of an array, should be of the similar information.
var numberArray = [1,2,3,4,5,6]
var namesArray = ["Edward","Jane","Michael"]

//ITERATING THROUGH AN ARRAY
for(var i = 0;i < numbersArray.length; i++){
    console.log(i) //PRINTS THE INDEX
    console.log(numberArray[i]) //PRINT THE VALUE
}
//  ITERATE THROUGH ARRAY BACKWARDS
for(var i = namesArray.length - 1; i >=0;i--){

}

//STRING INTERPELATION
function normalIterate(array){
    for(var i = 0; i < array.length;i++){
        console.log('INDEX:' ${i} 'VALUE:' ${array[i]})
    }
}
normalIterate ([1,2,3,4,5,6]]);
normalIterate (["Edward","Jane","Michael"])

normalIterate ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
//technically can pass through the string because it has a length
//cannot use a number for this ie. normalIterate (100)