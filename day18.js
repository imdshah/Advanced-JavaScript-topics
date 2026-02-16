function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Sequential
async function sequential() {
  console.time("Sequential");
  await delay(1000);
  await delay(1000);
  console.timeEnd("Sequential");
}

// Parallel
async function parallel() {
  console.time("Parallel");
  await Promise.all([delay(1000), delay(1000)]);
  console.timeEnd("Parallel");
}

sequential();
parallel();

/*
Sequential will be approx 2000ms
Parallel will be approx 1000ms
*/
