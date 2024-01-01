import { useContext } from "react";
import "./wishlist.css";
import { WishListContext } from "../../context/wishList-context";
import { useNavigate } from "react-router-dom";

export const WishList = () => {
  const { wishList } = useContext(WishListContext);
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
              {wishList.map(({ _id, img, author, name, price, qty }) => {
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
                        <button className="add-to-cart">Add to Cart</button>

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
