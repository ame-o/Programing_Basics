
//1. Write a for loop that will traverse through an array of numbers, and print each number.

// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];

function traverseLoop(arr1){
    for(i=0; i <= arr1.length - 1; i++){
        if(i <= arr1.length){
        console.log(arr1[i])
        }
    }
    }

traverseLoop(arr1);

//2. Write a for loop that will traverse through an array of numbers, and print the sum of the number and the index of the number in the array.
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];

function printSum(arr2){
    for(i=0; i <= arr2.length - 1; i++){
        var sum = i + arr2[i]
        console.log(sum)
    }
}
printSum(arr2);
//3. Write a for loop that will traverse through an array of numbers, and print ONLY the numbers greater than 5.
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];

function greaterThan5(arr3){
    for(i=0;i <= arr3.length-1;i++){
        if(arr3[i] > 5){
            console.log(arr3[i])
        }
    }
}
greaterThan5(arr3);
//NINJA BONUS: Modify your solution for #3 so that any numbers in the array that are NOT greater than 5 are instead replaced with a string of "No dice." This string should NOT be printed.

var arr4 = [6, 2, 12, 14, -24, 5, 0];

function noDice (arr4){
    for(i=0;i <= arr4.length-1;i++){
        if(arr4[i] > 5){
            console.log(arr4[i])
        }
        else if(arr4[i] <= 5){
            arr4[i] ="No Dice"
        }
    }
}
noDice(arr4);