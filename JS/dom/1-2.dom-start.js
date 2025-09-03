// DOM start
console.log(document.head);
console.log(document.body);

// document 로 HTML의 요소 선택
//  이전 방식(legacy)
//  getElementById(“ID이름”) : 해당 ID를 가지는 요소를 불러오는 메소드
console.log(document.getElementById("green"));
console.log(document.getElementsByClassName("default"));
console.log(document.getElementsByTagName("div"));

console.log("-----------------------------------");

// 선호되는 방식
// querySelector
// CSS selextor로 HTML 요소를 가져옴
//  요소 선택자를 사용해서 자신이 가져오고 싶어하는 요소를 가져오는 메소드
//   • 문서에서 만나는 제일 첫번째 요소를 반환함!
console.log(document.querySelector(".default"));
console.log(document.querySelector("#blue"));
console.log(document.querySelector("input"));
console.log(document.querySelector("[name='id']"));

console.log("-----------------------------------");

// queryselctorAll
//  불러온 요소들에 대한 순회가 가능(forEach)
//  선택자에 해당하는 모든 요소 선택
//   모든 요소를 가져와서 배열(같은) 데이터로 만들어 줌
console.log(document.querySelectorAll(".default"));
console.log(document.querySelectorAll(".others"));
console.log(document.querySelectorAll("div"));
// 요소를 순회
//  forEach 사용
document
    .querySelectorAll("div")
    .forEach((el) => console.log("순회한 요소: ", el));
//  for of 사용
let defaultElements = document.querySelectorAll(".default");
for (let element of defaultElements) {
    console.log("for of", element);
};