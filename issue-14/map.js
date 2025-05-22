const fs = require("fs");
const MAX = 100_000;
const REPEAT = 100;

let mapCSV = "insert,read,delete\n";

for (let r = 0; r < REPEAT; r++) {
    const map = new Map();
    const t1 = performance.now();
    for (let i = 0; i < MAX; i++) {
        map.set("key" + i, i);
    }
    const t2 = performance.now();
    for (let i = 0; i < MAX; i++) {
        const _ = map.get("key" + i);
    }
    const t3 = performance.now();
    for (let i = 0; i < MAX; i++) {
        map.delete("key" + i);
    }
    const t4 = performance.now();

    mapCSV += `${(t2 - t1).toFixed(3)},${(t3 - t2).toFixed(3)},${(
        t4 - t3
    ).toFixed(3)}\n`;
}
fs.writeFileSync("issue-14/map.csv", mapCSV);
console.log("✅map.csv 저장 완료");
