// Client

// 1. new Date()와 Date.now() 동작 확인
console.log("\n1. new Date()와 Date.now() 동작 확인");
console.log(
  "현재 시스템 시간대:",
  Intl.DateTimeFormat().resolvedOptions().timeZone
);

const now = new Date();
const timestamp = Date.now();

console.log("new Date():", now);
console.log("Date.now():", timestamp);
console.log("new Date(Date.now()):", new Date(timestamp));

// 2. 다양한 형식의 날짜 생성 테스트
console.log("\n2. 다양한 형식의 날짜 생성 테스트");
console.log("ISO 문자열로 생성:", new Date("2024-03-15T12:00:00Z"));
console.log("UTC+0 기준:", new Date("2024-03-15T12:00:00+00:00"));
console.log("UTC+9 기준:", new Date("2024-03-15T12:00:00+09:00"));
console.log("로컬 시간 문자열:", new Date("2024-03-15 12:00:00"));

// 3. 시간대 변환 실험
console.log("\n3. 시간대 변환 실험");
const date = new Date("2024-03-15T12:00:00Z");
console.log("UTC 시간:", date.toUTCString());
console.log("로컬 시간:", date.toString());
console.log("ISO 문자열:", date.toISOString());
console.log("로컬 ISO:", date.toLocaleString());

// 4. 타임스탬프 비교
console.log("\n4. 타임스탬프 비교");
const localDate = new Date();
console.log("로컬 타임스탬프:", localDate.getTime());
console.log("UTC 시간 기준:", localDate.getUTCHours());
console.log("로컬 시간 기준:", localDate.getHours());

// 5. 시간 연산 실험
console.log("\n5. 시간 연산 실험");
const futureDate = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24시간 후
console.log("24시간 후 (UTC):", futureDate.toUTCString());
console.log("24시간 후 (로컬):", futureDate.toString());

// 6. 날짜 비교 실험
console.log("\n6. 날짜 비교 실험");
const date1 = new Date("2024-03-15T00:00:00Z");
const date2 = new Date("2024-03-15T00:00:00+09:00");
console.log("날짜 1 (UTC):", date1.toUTCString());
console.log("날짜 2 (UTC+9):", date2.toUTCString());
console.log("두 날짜는 같은가?", date1.getTime() === date2.getTime());
console.log(
  "시차 (시간):",
  (date1.getTime() - date2.getTime()) / (1000 * 60 * 60)
);
