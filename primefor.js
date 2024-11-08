let num = 30; 
let isPrime = true; 


for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break; 
    }
}

if (num <= 1) {
    isPrime = false; 
}

console.log(isPrime ? `${num} is prime` : `${num} is not prime`);
