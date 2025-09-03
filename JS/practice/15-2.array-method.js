// 배열 메서드
let arr = [10, 20, 30, 40, 50];
console.log("원본: ", arr);
console.log("길이: ", arr.length);

// 추가/삭제
arr.push(60);       // 뒤로 추가
console.log("push(60): ", arr);
arr.unshift(0);         // 앞으로 추가
console.log("unshift(0): ", arr);
let tmp = arr.pop();        // 뒤 삭제
console.log("pop(): ", arr)
tmp = arr.shift();      // 앞 삭제
console.log("shift(): ", arr);

// 슬라이싱
let sliced = arr.slice(1,4);
console.log("slice(1,4): ", arr, sliced);

// splice : 기존 요소를 삭제 또는 교체 -> 원본 변경
arr.splice(1, 0, 15);
console.log("splice(1, 0, 15): ", arr);
arr.splice(4, 0, 35);
console.log("splice(4, 0, 35): ", arr);
arr.splice(4, 1, 100);      // 삭제와 함께 추가
console.log("splice(4, 1, 100): ", arr);

// 결합
let arr2 = [100, 200];
console.log("concat: ", arr.concat(arr2));      // 원본 변경 x

// 탐색
console.log("indexOf: ", arr.indexOf(100)); 
console.log("includes: ", arr.includes(200)); 

// 정렬 : 원본 변형
let nums = [3, 1, 5, 4, 2];
nums.sort();        // 기본 : 오름차순
console.log("sort(asc): ", nums);
nums.sort((a, b) => b - a);        // 내림차순
console.log("sort(desc): ", nums);
let users = [
    {
        id: 3,
        name: "철수"
    },
    {
        id: 2,
        name: "영희"
    },
    {
        id: 4,
        name: "길동"
    },
    {
        id: 1,
        name: "순신"
    }
];
users.sort((a,b) => a.id - b.id);
console.log(users);

nums.reverse();
console.log("reverse: ", nums);

// 순회(map, filter, reduce), 원본 변경 x
//  map : 원소를 순회하면서 함수를 적용
nums = nums.map((x) => x * 2);
console.log("map(x*2): ", nums);
//  filter : callback을 기준으로 원소를 필터링해서 반환함
let filtered = nums.filter((x) => x > 5 );
console.log("filter(x>5): ", filtered);
//  reduce : 앞의 원소에 대해 뒤의 원소를 연산한 결과를 누적함
let sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log("reduce(sum): ", sum);
// for(let i = 0 ; i < nums.length ; i++) {
//    um += nums[isNaN]
//} -> 이렇게 긴 걸 위와 같이 간단하게 표현함.
console.log("=========================");
// 배열 순회(like python)
let fruits = ["사과", "복숭아", "딸기", "수박", "포도"];
//  c 스타일 for문
for(let i = 0 ; i < fruits.length ; i++) {
    console.log("fruit", fruits[i])
};
console.log("---------------------------");
//   python 스타일
for(let fruit of fruits) {
    console.log("py스타일", fruit);
}
console.log("---------------------------");
// 배열 메서드
fruits.forEach((f) => console.log("forEach", f));