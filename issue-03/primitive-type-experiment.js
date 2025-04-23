/**
 * 기본형(Primitive type) 변수의 함수 전달 시 복사 동작 실험
 *
 * JavaScript Primitive Type:
 * - Null
 * - Undefined
 * - Boolean
 * - Number
 * - BigInt
 * - String
 * - Symbol
 *
 * 링크: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#primitive_values
 */

// 1. Number 타입 실험
function modifyNumber(num) {
  console.log("함수 내부 - 전달받은 num:", num);
  num = 100; // 새로운 값 할당
  console.log("함수 내부 - 변경된 num:", num);
}

let originalNum = 10;
console.log("함수 호출 전 originalNum:", originalNum);
modifyNumber(originalNum);
console.log("함수 호출 후 originalNum:", originalNum);

console.log("\n-------------------\n");

// 2. String 타입 실험
function modifyString(str) {
  console.log("함수 내부 - 전달받은 str:", str);
  str = "변경된 문자열";
  console.log("함수 내부 - 변경된 str:", str);
}

let originalStr = "원본 문자열";
console.log("함수 호출 전 originalStr:", originalStr);
modifyString(originalStr);
console.log("함수 호출 후 originalStr:", originalStr);

console.log("\n-------------------\n");

// 3. Boolean 타입 실험
function modifyBoolean(bool) {
  console.log("함수 내부 - 전달받은 bool:", bool);
  bool = false;
  console.log("함수 내부 - 변경된 bool:", bool);
}

let originalBool = true;
console.log("함수 호출 전 originalBool:", originalBool);
modifyBoolean(originalBool);
console.log("함수 호출 후 originalBool:", originalBool);
