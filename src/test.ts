import { MyTurn } from "./index.js";

let lock = new MyTurn();

console.log(lock.isLocked); // false

await lock.wait();

try {
    // Something that really shouldn't be happening at the same time as another thing
    console.log(lock.isLocked); // true
} finally {
    lock.done();
}

console.log(lock.isLocked); // false
// Ready to be locked again!