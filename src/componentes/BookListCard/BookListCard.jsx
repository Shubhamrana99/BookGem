import { useContext } from "react";
import "./bookListCard.css";
import { ProductContext } from "../../context/productContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart-Context";
import { WishListContext } from "../../context/wishList-context";
import { AuthContext } from "../../context/authContext";
import { pleaseLoggedInToast } from "../../utils/toast/Toast";

export const BookListCard = ({ book }) => {
  const { getDiscount } = useContext(ProductContext);
  const { bookInCart, handleAddToCart } = useContext(CartContext);
  const { handleAddToWishList, isBookInWishList, handleRemoveFromWishList } =
    useContext(WishListContext);
  const { authState } = useContext(AuthContext);

  const navigate = useNavigate();

  const { _id, img, name, author, price, originalPrice, rating } = book;

  const discountInPercentage = getDiscount(originalPrice, price);

  const handleProductToCart = () => {
    if (authState.isLoggedIn) {
      if (bookInCart(_id)) {
        navigate("/cart");
      } else {
        handleAddToCart(book);
      }
    } else {
      navigate("/user");
      pleaseLoggedInToast();
    }
  };

  return (
    <div className="bookListcard-container">
      <img
        alt={name}
        src={img}
        onClick={() => navigate(`/productdetails/${_id}`)}
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
          <button className="cart-btn-container" onClick={handleProductToCart}>
            {bookInCart(_id) ? (
              <div>
                <i class="bx bxs-cart"></i> Go to Cart
              </div>
            ) : (
              <div>
                <i class="bx bxs-cart"></i> Add to Cart
              </div>
            )}
          </button>
        </div>

        <div className="addToWishlist-container">
          {isBookInWishList(_id) ? (
            <div
              className="fill-heart-red"
              onClick={() => handleRemoveFromWishList(_id)}
            >
              <i class="bx bxs-heart"></i>
            </div>
          ) : (
            <div
              className="fill-heart"
              onClick={() => handleAddToWishList(book)}
            >
              <i class="bx bxs-heart"></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// <div
// className="addToWishlist-container"
// onClick={handleAddProductToWishList}
// >
// {bookInWishList(_id) ? (
//   <div className=".fill-heart-red">
//     <i class="bx bxs-heart"></i>
//   </div>
// ) : (
//   <div className="fill-heart">
//     <i class="bx bxs-heart"></i>
//   </div>
// )}
// </div>

// <div className="addToWishlist-container">
//           <button className="wishlist-btn" onClick={handleAddToWishListDetails}>
//             {isBookInWishList(_id) ? (
//               <div
//                 className="fill-heart-red"
//                 onClick={() => handleRemoveFromWishList(_id)}
//               >
//                 <i class="bx bxs-heart"></i>
//               </div>
//             ) : (
//               <div
//                 className="fill-heart"
//                 onClick={() => handleAddToWishList(book)}
//               >
//                 <i class="bx bxs-heart"></i>
//               </div>
//             )}
//           </button>
//         </div>
