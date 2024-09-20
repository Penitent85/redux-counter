import { INCREMENT, DECREMENT, RESET, INCREMENT_BY_VALUE, DECREMENT_BY_VALUE } from "./actionTypes";
const initialValue = {
  count: 0,
};
export const counterProvider = (state = initialValue, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};
