import { createContext, useState } from "react";
import axios from "axios";

export const WishListContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishListProduct, setWishListProduct] = useState([]);
  const userToken = localStorage.getItem("encodedToken");

  const handleAddToWishList = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product },
        {
          header: { authorization: userToken },
        }
      );
      if (response.status === 201) {
        console.log(response.data.wishlist);
        setWishListProduct([...wishListProduct, response.data.wishlist]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const bookInWishList = (productID) => {
    return wishListProduct.find(({ id }) => id === productID);
  };

  return (
    <WishListContext.Provider value={{ handleAddToWishList, bookInWishList }}>
      {children}
    </WishListContext.Provider>
  );
};
