const str = '11-15-1944';

const reverseDate = date => {
  const reversedDate = date
    .split('-')
    .reverse()
    .join(', ');
  return reversedDate;
};

console.log('-----------Third task-----------');
console.log(reverseDate(str));
console.log(str);
