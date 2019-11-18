const makeAdder = firstValue => {
  return secondValue => {
    return firstValue + secondValue;
  };
};

const addFunction = makeAdder(5);

console.log(`Сума дорівнює: ${addFunction(2)}`);
