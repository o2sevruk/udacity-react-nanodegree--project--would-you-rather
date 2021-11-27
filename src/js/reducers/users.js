import userActionTypes from "../actionTypes/users";

// Settings
const initialState = {
  data: [],
  loading: false,
  selected: null,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case userActionTypes.Loading: {
      return {
        ...state,
        loading: true,
      };
    }
    case userActionTypes.Fetch: {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    case userActionTypes.Select: {
      localStorage.removeItem("udacity-would-you-rather--current-user");
      localStorage.setItem("udacity-would-you-rather--current-user", JSON.stringify(action.payload));

      return {
        ...state,
        selected: action.payload,
      };
    }
    case userActionTypes.Add: {
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
