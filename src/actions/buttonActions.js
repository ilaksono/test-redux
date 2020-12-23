const INC = 'INCREMENT';
const DEC = 'DECREMENT';

const increment = () =>
  ({ type: INC });
  
const decrement = () =>
  ({ type: DEC });

export {
  increment,
  decrement
};