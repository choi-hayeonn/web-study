// 반복문
// for, while

// 1. for문
//  횟수를 기준으로 한 반복
for(let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("-------------");
for(let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("-------------");
for(let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("-------------");
for(let i = 1; i <= 10; i+=2) {
    console.log(i);
}
console.log("-------------");
// 1부터 100까지 합 구하기
let sum = 0
for(let i = 1; i <101; i++) {
    sum  += i;
}
console.log("1~100의 합 = ", sum);

console.log("==============");
// 2. while문
// 조건을 기준으로 한 반복
let i = 0
while (i < 5) {
    console.log(i);
    i++;
}

let blinker = "초록불";
while(blinker === "초록불") {
    console.log("Keep walking");
    blinker = prompt("신호등 상태를 입력하세요(초록불/빨간불)")
}
// 루프 제어문
//  break : 반복문의 탈출
while(true) {
    console.log("Keep walking");
    blinker = prompt("신호등 상태를 입력하세요(초록불/빨간불)")
    if (blinker === "빨간불") {
        break;
    }
}
//  continue : 실행을 건너뜀
let sumAge = 0;
let count = 0;
while (count < 5) {
    let age = Number(prompt());
    if (age > 120 || age < 0) {
        console.log("유효하지 않은 나이");
        continue;
    }
    sumAge += age;
    count++;
}
console.log(`평균나이: ${sumAge / count}`);