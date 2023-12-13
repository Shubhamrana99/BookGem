export const initialProduct = {
  bookList: [],
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "DISPLAY_BOOKLIST":
      return {
        ...state,
        bookList: payload,
      };

    default:
      return state;
  }
};
