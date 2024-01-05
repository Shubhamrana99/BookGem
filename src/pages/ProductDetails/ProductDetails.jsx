import { useNavigate, useParams } from "react-router-dom";
import "./productdetails.css";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import { CartContext } from "../../context/cart-Context";
import { pleaseLoggedInToast } from "../../utils/toast/Toast";
import { AuthContext } from "../../context/authContext";
import { WishListContext } from "../../context/wishList-context";

export const ProductDetails = () => {
  const { bookID } = useParams();
  const navigate = useNavigate();

  const { authState } = useContext(AuthContext);

  const {
    productState: { bookList },
    getDiscount,
  } = useContext(ProductContext);
  const { bookInCart, handleAddToCart } = useContext(CartContext);

  const getBook = bookList?.find(({ _id }) => _id === bookID);
  // console.log(getBook);
  const {
    _id,
    img,
    name,
    author,
    price,
    originalPrice,
    isBestSeller,
    category,
    rating,
  } = getBook;

  const { handleAddToWishList, isBookInWishList } = useContext(WishListContext);

  const discountedPrice = getDiscount(originalPrice, price);

  const handleAddToCartDetails = () => {
    if (authState?.isLoggedIn) {
      if (bookInCart(_id)) {
        navigate("/cart");
      } else {
        handleAddToCart(getBook);
      }
    } else {
      navigate("/user");
      pleaseLoggedInToast();
    }
  };

  const handleAddToWishListDetails = () => {
    if (authState?.isLoggedIn) {
      if (isBookInWishList(_id)) {
        navigate("/wishlist");
      } else {
        handleAddToWishList(getBook);
      }
    } else {
      navigate("/user");
      pleaseLoggedInToast();
    }
  };

  return (
    <div className="product-page-container">
      <div className="book-details-container">
        <div className="img-container">
          <img className="book-img" src={img} alt={name} />
        </div>

        <div className="book-details">
          <h3 className="bookname">{name}</h3>

          <p className="rating">
            {rating} <i class="bx bxs-star"></i>
          </p>

          <div className="prices-container">
            <p>₹{price}</p>
            <p className="original-price">₹{originalPrice}</p>
            <p className="discount-percentage">{discountedPrice}% OFF</p>
          </div>

          <p className="red-text">⚡Hurry , Only Few Left !</p>

          <div className="tag-text">
            <p>🏷️ Fastest Delivery</p>
            <p>🏷️ Inclusive of All Taxes</p>
            <p>🏷️ Cash On Delivery Available</p>
          </div>

          <div className="extra-details">
            <p>
              Author: <span className="primary-color-text">{author}</span>
            </p>
            <p>
              Category: <span className="primary-color-text">{category}</span>
            </p>
            <p>
              Language: <span className="primary-color-text">English</span>
            </p>
            {isBestSeller && (
              <p className="best-seller-container">Best Seller</p>
            )}
          </div>

          <div className="buttons-container">
            <button className="cart-btn" onClick={handleAddToCartDetails}>
              {" "}
              {bookInCart(getBook._id) ? (
                <div>Go to Cart</div>
              ) : (
                <div>Add to Cart</div>
              )}
            </button>

            <button
              className="wishlist-btn"
              onClick={handleAddToWishListDetails}
            >
              {isBookInWishList(_id) ? "Go to WishList" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
