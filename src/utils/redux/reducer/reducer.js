const initialState = {
  favorites: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: action.payload,
      };

    default:
      return state;
  }
};
