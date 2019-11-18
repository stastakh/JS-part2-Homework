console.log('-----------Fourth task-----------');

try {
  for (let i = 1; i <= 15; i++) {
    if (i === 11) {
      throw new Error('Ten is enough');
    }
    console.log(i);
  }
} catch (error) {
  console.log(error);
}
