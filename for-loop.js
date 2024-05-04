// for(number = 0; number <= 10;  number++){
//     console.log(number);
// }

// var numbers = [23,43, 53, 22, 73, 84,57];
var colors = ['red', 'green', 'yellow','blue','white', 'brawn']

for(var i = 0; i < colors.length; i++){
    //var number = numbers[i];
    var color = colors[i];

    // console.log(color);
}

var numbers = [42, 64,82, 32, 64, 73, 43, 55, 49, 61, 59];

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    
    if(number < 50){
        continue;
    }
    console.log(number);
}