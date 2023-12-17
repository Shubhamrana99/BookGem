import { createContext, useEffect, useReducer } from "react";
import { productServices } from "../services/product_Services/productService";
import { initialProduct, productReducer } from "../reducer/productReducer";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProduct
  );

  const getBookProduct = async () => {
    try {
      const {
        status,
        data: { products },
      } = await productServices();
      // export const productServices=async()=>await axios("/api/products");

      if (status === 200) {
        productDispatch({ type: "DISPLAY_BOOKLIST", payload: products });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBookProduct();
  }, []);

  // const {bookList}=productState;

  const searchedFilteredProducts =
    productState?.inputSearch.length > 0
      ? productState?.bookList.filter(({ name }) =>
          name.toLowerCase().includes(productState?.inputSearch.toLowerCase())
        )
      : productState?.bookList;

  const sortFilteredProducts =
    productState?.inputSort.length > 0
      ? productState?.inputSort === "lowtohigh"
        ? [...searchedFilteredProducts].sort((a, b) => a?.price - b?.price)
        : [...searchedFilteredProducts].sort((a, b) => b?.price - a?.price)
      : searchedFilteredProducts;

  const categoyFilteredProducts =
    productState?.inputCategory.length > 0
      ? [...sortFilteredProducts].filter(({ category }) =>
          productState?.inputCategory.includes(category)
        )
      : sortFilteredProducts;

  const ratingFilteredProduct =
    productState?.inputRating > 1
      ? [...categoyFilteredProducts].filter(
          ({ rating }) => productState.inputRating >= rating
        )
      : categoyFilteredProducts;

  const getDiscount = (originalPrice, price) => {
    return Math.trunc(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <ProductContext.Provider
      value={{
        productState,
        getDiscount,
        productDispatch,
        ratingFilteredProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
