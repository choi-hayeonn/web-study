let age = Number(prompt("나이를 입력하세요"));
console.log("나이:", age)

if (age >= 20) {
    console.log("성인");
} else if (age >= 17) {
    console.log("고등학생");
} else if (age >= 14) {
    console.log("중학생");
} else if (age >= 8) {
    console.log("초등학생");
}  else if (age >= 0) {
    console.log("유아"); 
}
else {
    console.log("잘못된 입력입니다.");
};


// if (age >= 20) console.log("성인");
// else if (age >= 17) console.log("고등학생");
// else if (age >= 14) console.log("중학생");
// else if (age >= 8) console.log("초등학생");
// else if (age >= 0) console.log("유아"); 
// else console.log("잘못된 입력입니다.");
// -> 그냥 이렇게 한줄로도 표현 가능.