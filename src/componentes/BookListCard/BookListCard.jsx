import { useContext } from "react";
import "./bookListCard.css";
import { ProductContext } from "../../context/productContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

export const BookListCard = ({ book }) => {
  const { getDiscount } = useContext(ProductContext);
  const navigate = useNavigate();
  const { bookInCart } = useContext(CartContext);

  const { id, img, name, author, price, originalPrice, rating } = book;

  const handleAddTocart = () => {};

  const discountInPercentage = getDiscount(originalPrice, price);

  const userToken = localStorage.getItem("encodedToken");
  // console.log(userToken);

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

        <div className="cart-btn-container">
          {bookInCart(id) ? (
            <button></button>
          ) : (
            <button onClick={() => handleAddTocart(book, userToken)}>
              <i class="bx bxs-cart"></i> Add to Cart
            </button>
          )}
        </div>

        <div className="addToWishlist-container">
          <div className="fill-heart">
            {" "}
            <i class="bx bxs-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
