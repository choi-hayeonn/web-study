// JS 연산자
// 1) 대입 연산자 2) 산술 연산자 3) 비교 연산자 4) 논리 연산자 

// 1. 산술 연산자
let a = 10;
let b = 5;
console.log("더하기 : ", a+b);
console.log("빼기 : ",a-b);
console.log("곱하기 : ",a*b);
console.log("나누기 : ",a/b);
console.log("나머지 : ",a%b);
console.log("거듭제곱 : ",a**b);
console.log("======================");
// 2. 비교 연산자
// 1) 동등 비교
// - 같다 : == , ===
// - 다르다 : !=, !==
// -> == , != : 값만 비교, 자료형은 비교 x
// -> === , !== : 값과 자료형 모두 비교 
console.log("== : ", 1 == "1");
console.log("!= : ", 1 != "1");
console.log("0 == false : ", "0" == false);
console.log("'' == false : ", "" == false);
console.log("null == undefined : ", null == undefined);
console.log("-----------------------");
console.log("=== : ", 1 === "1");
console.log("!== : ", 1 !== "1");

//  2) 크기비교
let c = 20;
let d = 15;
console.log("c > d", c > d);
console.log("c < d", c < d);
console.log("c >= d", c >= d);
console.log("c <= d", c <= d);

// 3. 논리 연산자
//  && :  and - 모든 조건이 참이면 참
//  || :  or - 조건 중 하나라도 참이면 참
//  !  : not - 참/거짓 반전

// x 가 A 또는 B 이다.
let x = "";
x === "A" || "B"; //  잘못된 표현 (문법적으로는 틀린 게 아니라 위의 명제에는 맞지 않다는 뜻)
x === "A" || x === "B"; //  올바른 표현

// 4. 복합대입연산자
let count = 0;
count = count + 1;
console.log("count = count + 1 : ", count);
count += 1; // 복합대입연산자
console.log("count += 1 : ", count);
count++;  // 증감연산자 (한 칸 증가) : 후치
console.log("count++ : ", count);
++count;  // 증감연산자 (한 칸 증가) : 전치
console.log("++coun : t", count);
count--;  // 증감연산자 (한 칸 감소) : 후치
console.log("count-- : ", count);

let e = 10;
let f = 3;
console.log("+= : ", (e += f));
console.log("-= : ", (e -= f));
console.log("*= : ", (e *= f));
console.log("/= : ", (e /= f));
console.log("%= : ", (e %= f));

let g;
g = count++;
console.log("count++(check g) : ", g)
console.log("count++(check count) : ", count)
let h;
h = ++count;
console.log("++count(check h) : ", h)
console.log("++count(check count) : ", count)


let mathScore = prompt("수학점수 입력")
console.log("수학점수", mathScore)