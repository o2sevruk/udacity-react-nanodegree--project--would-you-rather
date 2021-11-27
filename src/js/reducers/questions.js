import questionActionTypes from "../actionTypes/questions";

// Settings
const initialState = {
  data: [],
  loading: false,
  selected: null,
};

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case questionActionTypes.Loading: {
      return {
        ...state,
        loading: true,
      };
    }
    case questionActionTypes.Fetch: {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    case questionActionTypes.Select: {
      return {
        ...state,
        selected: state.data.filter((el) => el.id === action.payload)[0],
      };
    }
    case questionActionTypes.Add: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
