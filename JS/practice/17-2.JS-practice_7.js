// 실습. 배열과 반복문
// 1. 1~100까지의 정수배열을 for문을 사용해서 만들기.
let arr = [];
for (let i = 1; i <= 100; i++) {
    arr.push(i);
}
console.log("원본 배열:", arr);

// 2. 해당 배열의 합을 for문, for of문, forEach문을 사용해서 구하기
//  for
let sum1 = 0;
for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
}
console.log("for 합:", sum1);
//  for of
let sum2 = 0;
for (let num of arr) {
    sum2 += num;
}
console.log("for of 합:", sum2);
//  forEach
let sum3 = 0;
arr.forEach((num) => sum3 += num);
console.log("forEach 합:", sum3)
//  reduce
let sum4 = arr.reduce((acc, cur) => acc + cur);
console.log("reduce 합:", sum4)

console.log("========================")

// 실습. 내장 메소드
let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두","망고"]
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"]
// 동일한 요소만을 가지는 배열 
let same = fruits1.filter((fruit) => fruits2.includes(fruit));
console.log("same: ", same);
// 다른 요소만을 가지는 배열 
let diff = fruits1.filter((fruit) => !fruits2.includes(fruit));
console.log("diff: ", diff);