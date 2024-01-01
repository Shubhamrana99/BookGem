import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const WishListContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const userToken = localStorage.getItem("encodedToken");

  useEffect(() => {
    const getWishList = async () => {
      try {
        const res = await axios.get("/api/user/wishlist", {
          headers: { authorization: userToken },
        });
        const {
          status,
          data: { wishlist },
        } = res;
        if (status === 201) {
          setWishList(wishlist);
        }
      } catch (error) {
        console.error(error);
      }
    };
    userToken && getWishList();
  }, [userToken]);

  const handleAddToWishList = async (book) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        {
          product: book,
        },
        {
          headers: { authorization: userToken },
        }
      );
      if (response.status === 201) {
        console.log(response.data.wishlist);
        setWishList([...response.data.wishlist]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveFromWishList = async (bookId) => {
    try {
      const res = await axios.delete(`/api/user/wishlist/${bookId}`, {
        headers: { authorization: userToken },
      });
      console.log(res.data.wishlist);
      setWishList(res.data.wishlist);
    } catch (error) {
      console.error(error);
    }
  };

  const isBookInWishList = (bookID) => {
    return wishList.find(({ _id }) => _id === bookID);
  };

  return (
    <WishListContext.Provider
      value={{
        handleAddToWishList,
        isBookInWishList,
        wishList,
        handleRemoveFromWishList,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

// const handleAddToWishList = async (product) => {
//   try {
//     const response = await axios.post(
//       "/api/user/wishlist",
//       { product },
//       {
//         header: { authorization: userToken },
//       }
//     );
//     if (response.status === 201) {
//       console.log(response.data.wishlist);
//       setWishListProduct([...wishListProduct, response.data.wishlist]);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// const bookInWishList = (productID) => {
//   return wishListProduct.find(({ id }) => id === productID);
// };
