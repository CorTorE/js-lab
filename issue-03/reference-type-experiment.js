/**
 * 참조형(Reference type) 객체의 함수 전달 시 동작 실험
 * 객체 속성은 key-value 쌍과 동일
 *
 * JavaScript Reference Type:
 * - Object
 * - Array
 * - Function
 * - Date
 * - RegExp
 * - Map
 * - Set
 *
 * 링크: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#objects
 */

// 1. 객체의 프로퍼티 변경 실험
function modifyObjectProperties(obj) {
  console.log("함수 내부 - 전달받은 obj:", obj);
  obj.name = "변경된 이름"; // 객체의 프로퍼티 변경
  obj.age = 30; // 새로운 프로퍼티 추가
  console.log("함수 내부 - 변경된 obj:", obj);
}

let originalObj = {
  name: "원본 이름",
  age: 25,
};

console.log("함수 호출 전 originalObj:", originalObj);
modifyObjectProperties(originalObj);
console.log("함수 호출 후 originalObj:", originalObj);

console.log("\n-------------------\n");

// 2. 객체 자체 재할당 실험
function reassignObject(obj) {
  console.log("함수 내부 - 전달받은 obj:", obj);
  obj = {
    // 새로운 객체로 재할당
    name: "새로운 객체",
    age: 40,
  };
  console.log("함수 내부 - 재할당된 obj:", obj);
}

let originalObj2 = {
  name: "원본 객체",
  age: 25,
};

console.log("함수 호출 전 originalObj2:", originalObj2);
reassignObject(originalObj2);
console.log("함수 호출 후 originalObj2:", originalObj2);

console.log("\n-------------------\n");

// 3. 배열의 요소 변경 실험
function modifyArray(arr) {
  console.log("함수 내부 - 전달받은 arr:", arr);
  arr[0] = 100; // 배열 요소 변경
  arr.push(4); // 새로운 요소 추가
  console.log("함수 내부 - 변경된 arr:", arr);
}

let originalArr = [1, 2, 3];
console.log("함수 호출 전 originalArr:", originalArr);
modifyArray(originalArr);
console.log("함수 호출 후 originalArr:", originalArr);

console.log("\n-------------------\n");

// 4. 배열 자체 재할당 실험
function reassignArray(arr) {
  console.log("함수 내부 - 전달받은 arr:", arr);
  arr = [10, 20, 30, 40]; // 새로운 배열로 재할당
  console.log("함수 내부 - 재할당된 arr:", arr);
}

let originalArr2 = [1, 2, 3];
console.log("함수 호출 전 originalArr2:", originalArr2);
reassignArray(originalArr2);
console.log("함수 호출 후 originalArr2:", originalArr2);
