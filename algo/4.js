// { "b.c": { type: "UPDATE", old: 2, new: 3 }, "d": { type: "DELETE", old: 5 }, "e": { type: "ADD", new: 6 } }
const oldVer = { a: 1, b: { c: 2 }, d: 5 };
const newVer = { a: 1, b: { c: 3 }, e: 6 };

function diff(oldObj, newObj, path = '', result = {}) {}
diff(oldVer, newVer);
