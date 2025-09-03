let total = 0;
let i = 0;

while (i <= 100) {
   if (i % 2 === 0 || i % 5 === 0) {
       total += i;
   }
   i++;
}

console.log("0에서 100까지의 합(2와 5의 배수만) : ", total);