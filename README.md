# Advanced JavaScript topics
This repository contains the implementation and understanding of advanced JavaScript concepts
- Prototype Chain (Object Inheritance)
- Immutability (Shallow vs Deep Copy)
- Error Handling (throw, try/catch)
- Event Loop (Microtasks vs Macrotasks)
- Callbacks & Callback Hell
- Promises (Chaining & Error Bubbling)
- Async/Await (Sequential vs Parallel Execution)
- Retry Pattern with Backoff

## 1) Prototype Chain – Object Inheritance

JavaScript uses prototype-based inheritance.

Every object has an internal [[Prototype]] link.
When accessing a property, JavaScript checks:

1. The object itself
2. Its prototype
3. The prototype’s prototype
4. Until it reaches null

Key Concepts:
- Object.create()
- Prototype lookup order
- Property shadowing
- hasOwnProperty()

------------------------------------------------------------

## 2) Immutability – Shallow vs Deep Copy

Immutability means we do not directly modify the original object.
Instead, we create a new copy with updated values.

Shallow Copy:
- Created using spread operator: { ...obj }
- Only copies first-level properties
- Nested objects/arrays still share reference

Deep Copy:
- Creates fully independent copy
- Methods:
  - structuredClone(obj)
  - JSON.parse(JSON.stringify(obj)) (limited)

Why Immutability Matters:
- Prevents hidden bugs
- Important in React state management
- Ensures predictable behavior

------------------------------------------------------------

## 3) Error Handling – throw & try/catch

JavaScript allows custom error handling.

Throwing Errors:
throw new Error("Invalid input");

Handling Errors:
try {
  riskyFunction();
} catch (error) {
  console.log(error.message);
}

Best Practices:
- Validate inputs
- Throw meaningful errors
- Catch and handle gracefully
- Avoid silent failures

------------------------------------------------------------

## 4) Event Loop – Microtasks vs Macrotasks

JavaScript is single-threaded but handles async operations using the Event Loop.

Execution Order:
1. Call Stack (Synchronous code)
2. Microtask Queue (Promises, await)
3. Macrotask Queue (setTimeout, setInterval)

Example Execution Order:
Start
End
Promise
Timeout

Microtasks always execute before macrotasks.

------------------------------------------------------------

## 5) Callbacks & Callback Hell

A callback is a function passed into another function.

Example:
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 done");
    callback();
  }, 1000);
}

Callback Hell:
Deeply nested callbacks reduce readability and maintainability.

Solution:
- Use Promises
- Use async/await

------------------------------------------------------------

## 6) Promises – Chaining & Error Bubbling

A Promise represents a future value.

Promise States:
- Pending
- Fulfilled
- Rejected

Chaining Example:
task1()
  .then(result => task2())
  .then(result => console.log(result))
  .catch(error => console.log(error));

Error Bubbling:
Errors automatically propagate down the chain until caught.

------------------------------------------------------------

## 7) Async/Await – Sequential vs Parallel

Async functions always return a Promise.

Sequential Execution:
await task1();
await task2();
Total time = task1 time + task2 time

Parallel Execution:
await Promise.all([task1(), task2()]);
Total time = max(task1, task2)

Benefits:
- Cleaner syntax
- Better readability
- Avoids callback hell
- Easier error handling

------------------------------------------------------------

## 8) Retry Pattern – Retry + Backoff

Retry logic helps handle temporary failures like network issues.

Basic Strategy:
- Attempt operation
- If fails → wait
- Retry up to N times
- Stop after max attempts

Use Cases:
- API calls
- Network failures
- Database reconnection
- External service communication
 
