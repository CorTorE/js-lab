const fs = require("fs");
const MAX = 100_000;
const REPEAT = 100;

let objectCSV = "insert,read,delete\n";

for (let r = 0; r < REPEAT; r++) {
    const obj = {};
    const t1 = performance.now();
    for (let i = 0; i < MAX; i++) {
        obj["key" + i] = i;
    }
    const t2 = performance.now();
    for (let i = 0; i < MAX; i++) {
        const _ = obj["key" + i];
    }
    const t3 = performance.now();
    for (let i = 0; i < MAX; i++) {
        delete obj["key" + i];
    }
    const t4 = performance.now();

    objectCSV += `${(t2 - t1).toFixed(3)},${(t3 - t2).toFixed(3)},${(
        t4 - t3
    ).toFixed(3)}\n`;
}
fs.writeFileSync("issue-14/object.csv", objectCSV);
console.log("✅object.csv 저장 완료");
