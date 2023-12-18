export const initialProduct = {
  bookList: [],
  inputSearch: "",
  inputSort: "",
  inputCategory: [],
  inputRating: 5,
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "DISPLAY_BOOKLIST":
      return {
        ...state,
        bookList: payload,
      };

    case "SET_SEARCH_INPUT":
      return { ...state, inputSearch: payload };

    case "SET_SORT_INPUT":
      return { ...state, inputSort: payload };

    case "SET_RATING_INPUT":
      return { ...state, inputRating: payload };

    case "SET_CATEGORY_INPUT":
      return state?.inputCategory.includes(payload)
        ? {
            ...state,
            inputCategory: state.inputCategory.filter(
              (category) => category !== payload
            ),
          }
        : {
            ...state,
            inputCategory: [...state.inputCategory, payload],
          };

    case "SET_CLEAR_BTN":
      return {
        ...state,
        // bookList: [],
        bookList: payload,
        inputSearch: "",
        inputSort: "",
        inputCategory: [],
        inputRating: 5,
      };

    default:
      return state;
  }
};
