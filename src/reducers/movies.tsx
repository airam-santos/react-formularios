const initialState = { value: 0 };

const movies = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_MOVIES":
      return { ...state, value: state.value + action.delta };
    case "DECREMENT_MOVIES":
      return { ...state, value: state.value - action.delta };
    default:
      return state;
  }
};

export default movies;
