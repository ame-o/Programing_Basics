//For Loop nested in a For Loop #1

for(var num1=1; num1<=3;num1++)
{
    for(var num2=2;num2<=2;num2++)
    {
        console.log(num1,num2,"Dojo");
    }
}

//For Loop nested in a For Loop #2
for (var num3=0;num3<=3;num3++)
{
    for(var num4=0; num4<=2;num4++)
    {
        if(num3==5){
            console.log("coder")
        }
    }

    console.log("na")
}
console.log("batman!")

//For Loop nested in a For Loop #3
var x = "apple"
var y = "pie"

for (var num5=0; num5 <= x.length-2;num5++)
{
    for(var num6=0; num6<= y.length-3;num6++)
    {
        console.log(x+y)
    }
}

//For Loop nested in a For Loop #4
var msg1= "hello";
var msg2= "world!";

for (var num7=1; num7<= msg1.length; num7++)
{
    for(var num8=1; num8<=msg2.length;num8++){
        if(msg1.length == 4){
            console.log(msg1 +" "+ msg2);
        }
    }
if(num7!=4){
    console.log(msg1.length + msg2.length);
}
}