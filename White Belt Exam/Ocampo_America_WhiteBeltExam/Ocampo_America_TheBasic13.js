//1. Print 1-255
//Print all the integers from 1 to 255.

function print1To255(){
    for(var i=1; i<= 255; i++){
    console.log(i)
    }
}
//print1To255();

//2. Print Odds 1-255
//Print all odd integers from 1 to 255

function printOdds1To255(){
    for(var i=1; i<= 255; i++){
        if(i%2 === 1){
            console.log(i)
        }
    }
}
//printOdds1To255();

//3. Print Ints and Sum 0-255
//Print integers from 0 to 255, and with each integer print the sum so far

function printIntsAndSum0To255(){
    for(var i=1; i<= 255; i++){
        console.log(i);
        var sum = i + 1
        console.log(i + sum);
        }
}
//printIntsAndSum0To255();


//4. Iterate and Print Array
//Iterate through a given array, printing each value.

var arr = [2,6,8,9,0,10,11];
function arrIteration(arr){
    for(var i=0; i< arr.length; i++){
        console.log(arr[i])
    }
}
//arrIteration(arr);

//5. Find and Print Max
//Given an array, find and print its largest element.

function printMaxOfArray(arr){
    var winner=arr[0];
    for(i=0; i<arr.length;i++){
        if(arr[0] < arr[i]){
            winner = arr[i];
        }
    }
    console.log(winner);
}
//printMaxOfArray(arr);

//6. Get and Print Average
//Analyze an array’s values and print the average.

function printAverageOfArray(arr) {
    var sum = 0
    for(var i=0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    let avg = math.round(sum/arr.length);
    return avg;
}
///console.log(printAverageOfArray(arr));*****WHAT'S WRONG?


//7. Array with Odds
//Create an array with all the odd integers between 1 and 255 (inclusive).

var x = [];
function returnOddsArray1To255(x){
    for(i=1; i<= 255; i=i+2){
    x.push(i);
    }
console.log(x);
}
//returnOddsArray1To255(x);


//8. Square the 
// Square each value in a given array, returning that same array with changed values.

function squareArrayVals(arr){
    for(i = 0;i<arr.length; i++) {
    arr[i] *=arr[i];
    }
    return arr;
}
//console.log(squareArrayVals(arr));


//9. Greater than Y
//Given an array and a value Y, count and print the number of array values greater than Y.
y = 8
function returnArrayCountGreaterThanY(arr, y){
    var count = 0
    for(var i=0; i< arr.length; i++){
        if(arr[i] > y){
        count++    
        }
    }
    console.log(count);
}
//returnArrayCountGreaterThanY(arr,y);

//10. Zero Out Negative Numbers
//Return the given array, after setting any negative values to zero.
var arrNeg = [2,6,-8,9,0,-10,-11];
function zeroOutArrayNegativeVals(arrNeg){
    for(i = 0;i<arrNeg.length; i++) {
        if(arrNeg[i]<0){
            arrNeg[i]=0
        }
    }   
return arrNeg;
}
console.log(zeroOutArrayNegativeVals(arrNeg));

//11. Max, Min, Average
//Given an array, print the max, min and average values for that array.
var arr = [2,6,8,9,0,10,11];
function printMaxMinAverageArrayVals(arr){
    var max=arr[0];
    var min=arr[0];
    sum = 0
    for(i=0; i<arr.length;i++){
        if(arr[0] < arr[i]){
            max = arr[i];
        }
        else if (arr[0] > arr[i]){
            min = arr[i]
        }
        sum+= arr[i];
    }
    var avg2= sum/arr.length;
    console.log("Max: " + max, "Min: " + min, "Averge: "+ avg2);
}
//printMaxMinAverageArrayVals(arr);


//12. Shift Array Values
//Given an array, move all values forward (to the left)by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
var arr = [2,6,8,9,0,10,11];
function shiftArrayValsLeft(arr){
    var temp = 0
    for(i = 1; i< arr.length; i++) {
        arr[0] = arr[i]
    }
    arr.push(0);
    return arr;
}
console.log(shiftArrayValsLeft(arr));

//13. Swap String For Array Negative Values
//Given an array of numbers, replace any negative values with the string 'Dojo'.
var arrNeg = [2,6,-8,9,0,-10,-11];
function SwapStringForArrayNegativeVals(arr){
    for(i = 0;i<arrNeg.length; i++) {
        if(arrNeg[i]<0){
            arrNeg[i]="Dojo";
        }
    }   
return arrNeg;
}
//console.log(SwapStringForArrayNegativeVals(arrNeg));
