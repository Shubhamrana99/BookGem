import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {
  addToCartToast,
  handleErrorToast,
  removedFromCartToast,
} from "../utils/toast/Toast";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const userToken = localStorage.getItem("encodedToken");

  useEffect(() => {
    const getCart = async () => {
      // console.log(userToken);
      try {
        const response = await axios.get("/api/user/cart", {
          headers: { authorization: userToken },
        });
        const {
          status,

          data: { cart },
        } = response;
        if (status === 200) {
          setCartProducts(cart);
        }
      } catch (error) {
        console.error(error);
        handleErrorToast();
      }
    };
    userToken && getCart();
  }, [userToken]);

  const handleAddToCart = async (book) => {
    console.log(userToken);
    console.log(book);
    try {
      const response = await axios.post(
        "/api/user/cart",
        {
          product: book,
        },
        { headers: { authorization: userToken } }
      );
      const {
        status,
        data: { cart },
      } = response;

      if (status === 201) {
        setCartProducts([...cart]);
        addToCartToast();
      }
    } catch (error) {
      console.error(error);
      handleErrorToast();
    }
  };

  const handleRemoveFromCart = async (bookID) => {
    try {
      const res = await axios.delete(`/api/user/cart/${bookID}`, {
        headers: { authorization: userToken },
      });
      setCartProducts(res.data.cart);
      removedFromCartToast();
    } catch (error) {
      console.error(error);
      handleErrorToast();
    }
  };

  const handleQty = async (ID, updateType) => {
    try {
      const res = await axios.post(
        `/api/user/cart/${ID}`,
        { action: { type: updateType } },
        {
          headers: { authorization: userToken },
        }
      );
      setCartProducts(res.data.cart);
    } catch (error) {
      console.error(error);
      handleErrorToast();
    }
  };

  const bookInCart = (productID) => {
    return cartProducts.find(({ _id }) => _id === productID);
  };

  const productPrice = cartProducts.reduce(
    (acc, { originalPrice, qty }) => acc + originalPrice * qty,
    0
  );

  const totalDiscount = cartProducts.reduce(
    (acc, { originalPrice, price, qty }) => acc + (originalPrice - price) * qty,
    0
  );

  const totalProductAmount = cartProducts.reduce(
    (acc, { price, qty }) => acc + price * qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        bookInCart,
        handleAddToCart,
        cartProducts,
        handleRemoveFromCart,
        handleQty,
        productPrice,
        totalDiscount,
        totalProductAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// const addToCart = async (product, userToken) => {
//   // console.log({ product });
//   // console.log({ userToken });

//   try {
//     const response = await axios.post(
//       "/api/user/cart",
//       {
//         product,
//       },
//       {
//         headers: { authorization: userToken },
//       }
//     );

//     console.log(response);
//     // if (response.status === 201) {
//     //   setCart(response.data.cart);
//     // }
//   } catch (error) {
//     console.error(error);
//   }
// };

// const handleAddToCart = async (book) => {
//   // console.log({ encodedToken });
//   // console.log({ book });
//   // console.log();

//   try {
//     const res = await axios.post(
//       "/api/user/cart",
//       {
//         book,
//       },
//       {
//         headers: { authorization: userToken },
//       }
//     );
//     // console.log(res);
//     if (res.status === 201) {
//       console.log(res.data.cart);
//       setCartProducts(res.data.cart);
//     }
//   } catch (error) {
//     console.error("error are : ", error);
//   }
// };
