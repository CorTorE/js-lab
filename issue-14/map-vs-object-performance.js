const MAX = 100_000;

// Object Insert
const obj = {};
console.time("Object Insert");
for (let i = 0; i < MAX; i++) {
    obj["key" + i] = i;
}
console.timeEnd("Object Insert");

// Object Read
console.time("Object Read");
for (let i = 0; i < MAX; i++) {
    const temp = obj["key" + i];
}
console.timeEnd("Object Read");

// Object Delete
console.time("Object Delete");
for (let i = 0; i < MAX; i++) {
    delete obj["key" + i];
}
console.timeEnd("Object Delete");

// Map Insert
const map = new Map();
console.time("Map Insert");
for (let i = 0; i < MAX; i++) {
    map.set("key" + i, i);
}
console.timeEnd("Map Insert");

// Map Read
console.time("Map Read");
for (let i = 0; i < MAX; i++) {
    const temp = map.get("key" + i);
}
console.timeEnd("Map Read");

// Map Delete
console.time("Map Delete");
for (let i = 0; i < MAX; i++) {
    map.delete("key" + i);
}
console.timeEnd("Map Delete");
