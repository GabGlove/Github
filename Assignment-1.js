// Lines 2-4 push an Array into the variable numbers and prints the numbers
var numbers =[1, 2, 3, 4, 5, 6, 7, 8];
numbers.push(9);
console.log (numbers);
// Lines 6-10 prints numbers using a for loop, ending when the code runs into the number 9. 
var numbers= [];
for ( var i=0; 1 < 10; i++){
    if (i === 10) { break; }
    console.log (i);
}
/* lines 12, 13 print the first and last item, although the variable is undefined so there is no number. 
So I will have to figure out another way to do this */
console.log(numbers[numbers.length-9]);
console.log(numbers[numbers.length-1]);
// Lines 16, 17  create a variable, followed by a property assigned to the variable
var car = [];
car.colour =["blank"];
console.log(car.colour);


