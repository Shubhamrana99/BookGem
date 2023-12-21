import { useContext } from "react";
import "./bookListCard.css";
import { ProductContext } from "../../context/productContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart-Context";
import { WishListContext } from "../../context/wishList-context";

// export const BookListCard = ({
//   id,
//   img,
//   name,
//   author,
//   price,
//   originalPrice,
//   rating,
// }) => {
export const BookListCard = ({ book }) => {
  const { getDiscount, ratingFilteredProduct } = useContext(ProductContext);
  const { handleAddToCart, bookInCart } = useContext(CartContext);
  // const { handleAddToWishList } = useContext(WishListContext);

  const navigate = useNavigate();

  const { id, img, name, author, price, originalPrice, rating } = book;

  const discountInPercentage = getDiscount(originalPrice, price);

  // const userToken = localStorage.getItem("encodedToken");

  // const handleAddToCart = (id, userToken) => {
  //   const findProduct = ratingFilteredProduct.find((item) => item.id === id);
  //   addToCart(findProduct, userToken);
  // };

  return (
    <div className="bookListcard-container">
      <img
        alt={name}
        src={img}
        onClick={() => navigate(`/productdetails/${id}`)}
      />

      <div className="booklistDetails-container">
        <div className="name-author-rating-container">
          <div className="name-rating-container">
            <p className="name">{name}</p>
            <p className="rating">
              {rating}
              <i class="bx bxs-star"></i>
            </p>
          </div>
          <p className="author">{author}</p>
        </div>

        <div className="price-container">
          <p className="price">₹{price}</p>

          <p className="original-price">₹{originalPrice}</p>

          <p className="discount">({discountInPercentage}% OFF)</p>
        </div>

        <div>
          {bookInCart(id) ? (
            <button
              className="cart-btn-container"
              onClick={() => navigate("/cart")}
            >
              <i class="bx bxs-cart"></i> Go to Cart
            </button>
          ) : (
            <button
              className="cart-btn-container"
              // onClick={() => addToCart(book, userToken)}
              onClick={() => handleAddToCart(book)}
            >
              <i class="bx bxs-cart"></i> Add to Cart
            </button>
          )}
        </div>

        <div className="addToWishlist-container">
          <div
            className="fill-heart"
            // onClick={() => handleAddToWishList(book, userToken)}
          >
            <i class="bx bxs-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
