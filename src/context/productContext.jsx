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

  const getDiscount = (originalPrice, price) => {
    return Math.trunc(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <ProductContext.Provider value={{ productState, getDiscount }}>
      {children}
    </ProductContext.Provider>
  );
};
