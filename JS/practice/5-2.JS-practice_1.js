let mathScore = prompt("수학점수 입력");
console.log("수학점수: ", mathScore);
let engScore =Number(prompt("영어점수 입력"));
console.log("영어점수: ", engScore);
let avgScore = (Number(mathScore) + engScore) / 2;
console.log(`평균점수 : ${avgScore}`)