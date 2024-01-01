import { useContext } from "react";
import "./wishlist.css";
import { WishListContext } from "../../context/wishList-context";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart-Context";

export const WishList = () => {
  const { wishList } = useContext(WishListContext);
  const { handleAddToCart, bookInCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="wishList-page-container">
        <h2 className="wishList-heading">
          My WishList <spam> {`[${wishList.length}]`} </spam>
        </h2>

        <div className="wishList-container">
          {wishList.length ? (
            <div className="wishList-listing-container">
              {wishList.map((book) => {
                const { _id, img, author, name, price } = book;
                return (
                  <div className="wishList-card" key={_id}>
                    <img
                      className="wishlist-img"
                      src={img}
                      alt={name}
                      onClick={() => navigate(`/productdetails/${_id}`)}
                    />
                    <div>
                      <p className="book-name">{name}</p>
                      <p className="author-name">{author}</p>
                      <p className="book-price">₹{price}</p>

                      <div className="add-remove-btn">
                        {bookInCart(_id) ? (
                          <button
                            className="add-to-cart "
                            onClick={() => navigate("/cart")}
                          >
                            Go to Cart
                          </button>
                        ) : (
                          <button className="product-in-cart">
                            Book in Cart
                          </button>
                        )}

                        <button className="remove-from-wishlist">
                          <i class="bx bx-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="empty-wishlist">Your Wishlist is Empty😴😴</div>
          )}
        </div>
      </div>
    </>
  );
};
