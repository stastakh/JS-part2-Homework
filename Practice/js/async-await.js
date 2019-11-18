async function promiseHandling() {
  try {
    const firstPromiseData = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('a');
      }, 1000);
    });
    const secondPromiseData = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(firstPromiseData + 'b');
      }, 1000);
    });
    throw new Error(secondPromiseData);
  } catch (error) {
    throw new Error(error);
  }
}

promiseHandling().catch(error => {
  console.log('-----------Sixth task-----------');
  console.log(error);
});
