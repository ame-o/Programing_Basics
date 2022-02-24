function EvensAndOdds(arr){
    var OddCount = 0
    var EvenCount = 0
    for(var i = 0; i<arr.length; i++){
        if(arr[i]%2 === 1){
            OddCount++
            EvenCount = 0 
        }
        else{
            EvenCount++
            OddCount = 0
        }
        if(OddCount%3 == 0 && OddCount > 0){
            console.log("That's odd")
        }
        if(EvenCount%3 == 0 && EvenCount > 0){
            console.log("Even more so!")
        }
    }
}
EvensAndOdds([3,3,3,4,4,4,2,2,2])