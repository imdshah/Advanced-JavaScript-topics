function fakeApi() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.7;
    success ? resolve("Success") : reject("Failed");
  });
}

async function retry(fn, retries = 3, delayTime = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      console.log(`Retry ${i + 1} failed`);
      if (i === retries - 1) throw error;
      await new Promise(res => setTimeout(res, delayTime));
    }
  }
}

retry(fakeApi)
  .then(result => console.log(result))
  .catch(error => console.log("Final Failure:", error));
