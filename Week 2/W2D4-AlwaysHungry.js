// Always Hungry

// Create a function that accepts an array
// and prints "yum!" each time one of the 
// values of the array is equal to "food"

// if no values are equal to "food"
// print "i'm hungry!" once.


// Given: [1, "food", "hello", true, "food"]
// output
// yum!
// yum!


// Given: ["hello", "world", 40]
// output
// i'm hungry!
function feedMe (isItFood){
    for(i=0; i < isItFood.length; i++){
        if (isItFood[i] === "food"){
            console.log("yum!")
        }
    } 
    if (isItFood["food"] == true){
        do nothing
    }
    else if{
        console.log("I'm hungry!")
    }
}
var isItFood = [1,2,3,4,6,"jam"]
feedMe(isItFood);
/// did not complete this challenge

//Solution below:
function hungry(arr){
    var foundFood = false;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === "food"){
        console.log("yum");
        foundFood = true;
      }
    }
    
    if(!foundFood){ // ! bang operator "NOT"
      console.log("always hungry!");
    }
  }
  
  function hungry2(arr){
    var stillHungry = true;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === "food"){
        console.log("yum");
        stillHungry = false;
      }
    }
    
    if(stillHungry){ // ! bang operator "NOT"
      console.log("always hungry!");
    }
  }