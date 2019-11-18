const invokeIncrement = () => {
  let invoked = 0;
  return () => {
    console.log((invoked += 1));
  };
};

const countInvokations = invokeIncrement();

countInvokations();
countInvokations();
countInvokations();
