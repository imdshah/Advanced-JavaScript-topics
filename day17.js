function task1() {
  return Promise.resolve("Task 1 complete");
}

function task2() {
  return Promise.reject("Task 2 failed");
}

task1()
  .then(result => {
    console.log(result);
    return task2();
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log("Error caught:", error);
  });
