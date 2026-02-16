function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 done");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 done");
    callback();
  }, 1000);
}

function step3() {
  setTimeout(() => {
    console.log("Step 3 done");
  }, 1000);
}

// Nested callbacks (callback hell)
step1(() => {
  step2(() => {
    step3();
  });
});
