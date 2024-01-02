import React, { useContext } from "react";
import "./checkout.css";
import { CartContext } from "../../context/cart-Context";
import { AddressContext } from "../../context/addressContext";

export const CheckOut = () => {
  const { cartProducts, productPrice, totalDiscount, totalProductAmount } =
    useContext(CartContext);

  const { address } = useContext(AddressContext);

  return (
    <div className="checkout-page-container">
      <h2 className="checkout-heading">Checkout</h2>
      <div className="checkout-container">
        <div className="checkout-address-container">
          {address.length >= 1 && <p className="bold"> Select Address</p>}
          <div className="address-list">
            {address.map((address) => {
              const { id, name, area, city, state, pincode, phoneNumber } =
                address;
              return (
                <div key={id} className="address-details-content">
                  {" "}
                  <input type="radio" className="address-input" />
                  <div>
                    <p>{name}</p>
                    <p>{area}</p>
                    <p>{city}</p>
                    <p>{state}</p>
                    <p>{pincode}</p>
                    <p>{phoneNumber}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="checkout-order-summery-container">
          <h3 className="order-summery-heading ">Order Summery</h3>

          <div className="book-quantity-container">
            <div className="book-listing-container">
              <h3 className="bold-text">Books ({cartProducts.length} items)</h3>
              {cartProducts.map(({ name }) => (
                <p>{name}</p>
              ))}
            </div>
            <div className="qty-listing-container">
              <h3 className="bold-text">Quantity</h3>
              {cartProducts.map(({ qty }) => (
                <p>{qty}</p>
              ))}
            </div>
          </div>

          <div className="price-amount-container">
            <h3 className="price-details-heading">Price Details</h3>
            <div className="price-amount-container">
              <p>Price ({cartProducts.length} items)</p>
              <p>₹{productPrice}</p>
            </div>

            <div className="discount-amount-container">
              <p>Discount</p>
              <p>-₹{totalDiscount}</p>
            </div>

            <div className="delivery-charge-container">
              <p>Delivery</p>
              <p>FREE</p>
            </div>

            <div className="total-amount-container">
              <p>Total Amount</p>
              <p>₹{totalProductAmount}</p>
            </div>

            <p className="total-amount-text">
              You will save <strong>₹{totalDiscount} </strong>on this order
            </p>

            <div className="Delivery-details-container">
              <h3>Delivery Details</h3>
              <p>Delivery addressis here</p>
            </div>

            <button className="place-order-btn">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};
