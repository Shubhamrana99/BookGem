import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const userToken = localStorage.getItem("encodedToken");

  useEffect(() => {
    const getCart = async () => {
      console.log(userToken);
      try {
        const response = await axios.get("/api/user/cart", {
          headers: { authorization: userToken },
        });
        // const {
        //   status,
        //   data: { cart },
        // } = response;
        console.log(response);
        // if (status === 200) {
        //   setCartProducts(cart);
        // }
      } catch (error) {
        console.error(error);
      }
    };
    userToken && getCart();
  }, [userToken]);

  const handleAddToCart = async (book, ID) => {
    console.log("by clicking addtocart ", ID);
    try {
      const response = await axios.post(
        "/api/user/cart",
        {
          book,
        },
        { headers: { authorization: userToken } }
      );
      // const {
      //   status,
      //   data: { cart },
      // } = response;

      console.log(response);

      // if (status === 201) {
      //   setCartProducts([...cartProducts, cart]);
      // }
    } catch (error) {
      console.error(error);
    }
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

  const bookInCart = (productID) => {
    return cartProducts.find(({ id }) => id === productID);
  };

  return (
    <CartContext.Provider value={{ bookInCart, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};
