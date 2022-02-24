// The request is asking to give out candy repeatedly at 2 mile intervals until a participant reaches mile 6.
// The starting point begins at 2 miles ran on treadmill when the first candy is given.
// The loop stops at 6 miles per instructions.
// The condition will need to be set to stop at or less than 6 miles.
// The increments are set to give out candy every 2 miles.
// The variable is the number of miles ran

//CODE CHALLENGE: LOOP-D-LOOP
for(var milesRan = 2; milesRan <= 6; milesRan = milesRan + 2){
    console.log(milesRan);
    console.log("have a candy")
}

//STRETCH FEATURE
var milesPerHour = 5.5
for(var milesRan = 2; milesRan <= 6; milesRan = milesRan + 2){

if(milesRan >=2 && milesPerHour <= 5.5){
    console.log(milesRan)
    console.log("Have a candy")
    }
    
}