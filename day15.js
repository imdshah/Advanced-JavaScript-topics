console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

async function test() {
  console.log("Async Start");
  await Promise.resolve();
  console.log("Async End");
}

test();

console.log("End");

/*
Execution Order:

1. Start
2. Async Start
3. End
4. Promise (microtask)
5. Async End (microtask after await)
6. Timeout (macrotask)
*/
