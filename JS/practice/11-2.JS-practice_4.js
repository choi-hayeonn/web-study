for (let i = 1; i <= 10000; i++) {
    if(i % 13 === 0 && i % 2 === 1) {
        console.log(i);
    }
}

console.log("---------------------------")

let num = Number(prompt("숫자를 입력하세요."));
for (let i = 1; i <= num; i++) {
    i % 13 === 0 && i % 2 !== 0 ? console.log(i) : null;
}

console.log("---------------------------")

// 2중 for문
for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        console.log(i,j);
    } 
}