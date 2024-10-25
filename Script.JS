var output = document.getElementById('output');
for (var i = 1; i <= 5; i++){
     output.innerHtml += '<p>Example1 - Number: ${i}</p>';
} 
var fruits =['Apple', 'Banana', 'Mango', 'Orange'];
for (var j = 0; j < fruits.length; j++) {
    output.innerHTML += '<p>Example 2 - Fruit: ${fruits[j]}</p>';
}
for (var k = 5; k >=1; k--) {
    output.innerHTML += '<p>Example 3 - Countdown: ${k}</p>';
}
for (var l = 1; l <= 10; l++) {
    if (1 % 2 === 0) continue;
    output.innerHTML += '<p>Example4 - Odd Number: ${1}</p>';
}
for (var m = 0; m <= 10; m += 2){
    output.innerHTML += '<p>Example 5 - Step by 2: ${m}</p>';
}