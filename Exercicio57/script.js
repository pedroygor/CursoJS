function fizzBuzz(num) {
    if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    else if (num % 3 === 0) return 'Fizz';
    else if(num % 5 === 0) return 'Buzz';
    else if (Number.isNaN(num)) return num;
    else return num;
}
for (let index = 0; index <= 100; index++) {
    console.log(index, fizzBuzz(index));
}


 
    
    