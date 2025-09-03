let greeting = document.querySelector("#greeting");
console.log(greeting);
// 태그 내부 내용 변경
console.log(greeting.innerHTML);

console.log(greeting.textContent); // (태그 안쪽의 내용을 불러올 때) 더 선호되는 방식
// innerHTML은 태그 안쪽에 HTML을 주입
greeting.innerHTML = "안녕하세요 <b>반갑습니다</b> 행복한 하루";
console.log(greeting);

// textContent는 태그 안쪽에 text를 입력
greeting.innerHTML = "안녕하세요 <b>반갑습니다</b> 행복한 하루";
console.log(greeting);

// 속성 변경
const naver = document.querySelector("#naver");
naver.textContent = "google";
console.log(naver);
naver.setAttribute("href", "https://www.google.com");

// 속성 값 가져오기
const peach = document.querySelector("#peach");
console.log(peach)
const url = peach.getAttribute("src");
console.log(peach.getAttribute("src"));

const test = document.querySelector("#test")
test.setAttribute("sec", url);