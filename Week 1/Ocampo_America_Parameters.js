
//Create a function that, given a name, will say "good day" to that person by name.

function greeting (){
    console.log(":)")
    return("Good Day" + " " + name);
}
var name = "Obi Wan";
console.log(greeting(name));


//Further customize your function by including the time of day in your greeting.

function greeting (){
    if(name== "Padme"){
        console.log ("<3")
    }
    if(timeofDay <= 11){
        return("Good Morning "+ name);
    }
    else if(timeofDay>= 12 && timeofDay < 17){
        return("Good Afternoon "+ name);
    }
    else if(timeofDay== 17 || timeofDay> 17){
        return("Good Evening "+ name);
    }
}

var timeofDay = 16;
var name = "Padme";
console.log(greeting(name));


//Further customize your code to to say, "I'm coming for you, Dooku!" if your function is called with "Count Dooku".
function greeting (){
    if(name== "Padme"){
        console.log ("<3")
    }
       if(name =="Count Dooku"){
        console.log ( ">:("+ " </3")
        return("I'm coming for you, Dooku!"); 
    }
    if(timeofDay <= 11){
            return("Good Morning "+ name);
        }
     else if(timeofDay>= 12 && timeofDay < 17){
            return("Good Afternoon "+ name);
        }
    else if(timeofDay== 17 || timeofDay> 17){
            return("Good Evening "+ name);
        }
    }
    
    var timeofDay = 20;
    var name = "Count Dooku";
    console.log(greeting(name));