console.log('-----------Fifth task-----------');

const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('a');
  }, 1000);
})
  .then(data => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data + 'b');
      }, 1000);
    });
  })
  .then(data => {
    throw new Error(data);
  })
  .then(null, data => {
    throw new Error(data);
  })
  .catch(error => console.log(error));
