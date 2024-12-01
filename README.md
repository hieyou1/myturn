# myturn

Super simple library to make sure Promises wait their turn to resolve. It's probably not best practice to use this library in production because it could negate the performance benefits of asynchronous code.

## Usage

```js
import { MyTurn } from "myturn";

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
```

## License

MIT
