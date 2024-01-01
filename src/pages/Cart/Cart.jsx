import { useContext } from "react";
import "./cart.css";
import { CartContext } from "../../context/cart-Context";
import { useNavigate } from "react-router-dom";
import { WishListContext } from "../../context/wishList-context";

export const Cart = () => {
  const {
    cartProducts,
    handleRemoveFromCart,
    handleQty,
    productPrice,
    totalDiscount,
    totalProductAmount,
  } = useContext(CartContext);
  const { isBookInWishList, handleAddToWishList } = useContext(WishListContext);

  const navigate = useNavigate();

  const handleUpdateQty = (ID, updateType, qty) => {
    if (qty >= 1) {
      handleQty(ID, updateType);
    } else {
      handleRemoveFromCart(ID);
    }
  };

  return (
    <div className="cart-page-container">
      <div className="cart-heading-container">
        <h2 className="cart-heading">
          My Cart <spam> {`[${cartProducts.length}]`} </spam>
        </h2>
      </div>

      <div className="cart-container">
        <div className="cart-product-container">
          {cartProducts.length ? (
            <div className="cart-listing-container">
              {cartProducts.map((products) => {
                const { _id, img, author, name, price, qty } = products;
                return (
                  <div key={_id} className="book-card-conatiner">
                    <img
                      className="cart-img"
                      alt={name}
                      src={img}
                      onClick={() => navigate(`/productdetails/${_id}`)}
                    />

                    <div>
                      <p className="product-name">
                        <strong>{name}</strong>
                      </p>
                      <p className="author-name">{author}</p>
                      <p className="product-price">₹{price}</p>

                      <div className="qty-btn-container">
                        <button
                          className="qty-btn"
                          onClick={() => handleUpdateQty(_id, "increment", qty)}
                        >
                          +
                        </button>
                        <span className="qty">{qty}</span>
                        <button
                          className="qty-btn"
                          onClick={() => handleUpdateQty(_id, "decrement", qty)}
                        >
                          -
                        </button>
                      </div>

                      <div className="add-remove-btn">
                        {!isBookInWishList(_id) ? (
                          <button
                            className="addtoacart-wishlist"
                            onClick={() => {
                              handleAddToWishList(products);
                              handleRemoveFromCart(_id);
                            }}
                          >
                            Add to Wishlist
                          </button>
                        ) : (
                          <button
                            className="addtoacart-wishlist"
                            onClick={() => navigate("/wishlist")}
                          >
                            Go to WishList
                          </button>
                        )}

                        <button
                          className="removefromcart-btn"
                          onClick={() => handleRemoveFromCart(_id)}
                        >
                          <i class="bx bx-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="empty-cart-container">Your Cart is Empty😴😴</div>
          )}
        </div>

        {cartProducts.length ? (
          <div className="cart-bill-container">
            <h3 className="price-details-header">Price Details</h3>
            <div className="price-content-container">
              <p>Price ({cartProducts.length} items)</p>
              <p>₹{productPrice}</p>
            </div>
            <div className="price-content-container">
              <p>Discount</p>
              <p>- ₹{totalDiscount}</p>
            </div>
            <div className="price-content-container">
              <p>Delivery Charges</p>
              <p>FREE</p>
            </div>
            <div className="price-content-container total-amount-container">
              <p>Total Amount</p>
              <p>₹{totalProductAmount}</p>
            </div>
            <p className="total-amount-text">
              You will save <strong>₹{totalDiscount} </strong>on this order
            </p>
            <button
              className="checkout-button"
              // onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
