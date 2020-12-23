const initState = {
  value: 0
};

const buttonReducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value + 1 };
    default:
      return state;
  }
};

export default buttonReducer;