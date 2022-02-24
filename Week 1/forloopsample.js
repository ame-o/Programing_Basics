for (var num = 0; num <= 5; num++) {
    console.log(num);
}
//while loops
var num = 0;    // start a variable at 0
while (num <= 5) {    
    console.log(num);    // print the current value of num    
    num++;       // increment num by 1
}

//ALL EVEN NUMBERS 0->20
for(var num = 0; num < 20; num += 2){
    console.log(num)
}
// TEST
function test(){
    for(var i = 1; i < 10; i++){
        if(i % 5 ==0){
            return i
        }
}
}

console.log(test())