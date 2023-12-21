import { createContext } from "react";
import axios from "axios";

export const WishListContext = createContext();

export const WishlistProvider = ({ children }) => {
  const handleAddToWishList = async (product, userToken) => {
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
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <WishListContext.Provider value={{ handleAddToWishList }}>
      {children}
    </WishListContext.Provider>
  );
};
